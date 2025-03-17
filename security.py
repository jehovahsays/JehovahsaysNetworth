from flask import Flask, render_template, request, jsonify, session, make_response
import secrets
import sqlite3

app = Flask(__name__)

# Secure session configuration
app.secret_key = secrets.token_hex(32)
app.config.update(
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SECURE=True,  # Enable if using HTTPS
    SESSION_COOKIE_SAMESITE="Strict"
)

# Security headers function
@app.after_request
def set_security_headers(response):
    response.headers["Content-Security-Policy"] = (
        "default-src 'self'; script-src 'self' 'nonce-{nonce}'; style-src 'self' 'unsafe-inline'; "
        "img-src 'self' data:; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; "
        "form-action 'self'; upgrade-insecure-requests;".format(nonce=session.get('csrf_token', ''))
    )
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Permissions-Policy"] = "geolocation=(), microphone=(), camera=(), payment=(), fullscreen=()"
    response.headers["Strict-Transport-Security"] = "max-age=63072000; includeSubDomains; preload"
    return response

# Generate CSRF token
@app.before_request
def set_csrf_token():
    if "csrf_token" not in session:
        session["csrf_token"] = secrets.token_hex(32)

# Secure database connection
def get_db_connection():
    conn = sqlite3.connect("secure_db.sqlite")
    conn.row_factory = sqlite3.Row
    return conn

# Secure input sanitization
def secure_input(data):
    return str(data).strip().replace("<", "&lt;").replace(">", "&gt;")

# Home route
@app.route("/", methods=["GET"])
def home():
    return render_template("index.html", csrf_token=session["csrf_token"])

# Process form submission (CSRF Protected)
@app.route("/submit", methods=["POST"])
def submit():
    if request.form.get("csrf_token") != session["csrf_token"]:
        return jsonify({"error": "CSRF validation failed"}), 403

    name = secure_input(request.form.get("name", ""))
    if name:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (name) VALUES (?)", (name,))
        conn.commit()
        conn.close()
        return jsonify({"message": "Data submitted securely"}), 200

    return jsonify({"error": "Invalid input"}), 400

if __name__ == "__security__":
    app.run(debug=False, host="0.0.0.0", port=5000)