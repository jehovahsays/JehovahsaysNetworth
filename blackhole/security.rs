use actix_web::{web, App, HttpRequest, HttpResponse, HttpServer, Responder, middleware};
use actix_session::{Session, SessionMiddleware, storage::CookieSessionStore};
use rand::Rng;
use std::env;

/// Generates a CSRF token and stores it in the session
fn generate_csrf_token(session: &Session) {
    if session.get::<String>("csrf_token").unwrap_or(None).is_none() {
        let token: String = rand::thread_rng()
            .sample_iter(rand::distributions::Alphanumeric)
            .take(32)
            .map(char::from)
            .collect();
        session.insert("csrf_token", token).unwrap();
    }
}

/// Middleware to add security headers
async fn security_headers_middleware(req: HttpRequest, res: HttpResponse) -> HttpResponse {
    let mut res = res;

    res.headers_mut().insert("Content-Security-Policy", "default-src 'self'; script-src 'self' 'nonce-randomnonce'; style-src 'self' 'unsafe-inline'; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;".parse().unwrap());
    res.headers_mut().insert("X-Frame-Options", "DENY".parse().unwrap());
    res.headers_mut().insert("X-Content-Type-Options", "nosniff".parse().unwrap());
    res.headers_mut().insert("X-XSS-Protection", "1; mode=block".parse().unwrap());
    res.headers_mut().insert("Referrer-Policy", "strict-origin-when-cross-origin".parse().unwrap());
    res.headers_mut().insert("Permissions-Policy", "geolocation=(), microphone=(), camera=(), payment=(), fullscreen=()".parse().unwrap());
    res.headers_mut().insert("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload".parse().unwrap());

    res
}

/// Secure index page handler
async fn index(session: Session) -> impl Responder {
    generate_csrf_token(&session);
    let csrf_token: String = session.get("csrf_token").unwrap().unwrap_or_else(|| "".to_string());

    let html = format!(
        r#"
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Secure Rust Web Page</title>
            <script nonce="{csrf_token}">
                "use strict";
                document.addEventListener("contextmenu", (event) => event.preventDefault());

                async function secureFetch(url, options = {}) {{
                    const defaultOptions = {{
                        method: "POST",
                        credentials: "same-origin",
                        headers: {{
                            "Content-Type": "application/json",
                            "X-CSRF-Token": document.getElementById("csrf_token").value
                        }}
                    }};
                    const response = await fetch(url, {{ ...defaultOptions, ...options }});
                    return response.ok ? response.json() : Promise.reject("Request failed");
                }}
            </script>
        </head>
        <body>
            <h1>Secure Rust Web Page</h1>
            <p>Your connection is protected with security best practices.</p>

            <form id="secureForm" method="POST" action="/submit">
                <input type="hidden" name="csrf_token" id="csrf_token" value="{csrf_token}">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
        "#
    );

    HttpResponse::Ok()
        .insert_header(("Content-Type", "text/html; charset=utf-8"))
        .body(html)
}

/// Secure form submission with CSRF protection
async fn submit(session: Session, form: web::Form<std::collections::HashMap<String, String>>) -> impl Responder {
    let csrf_token = session.get::<String>("csrf_token").unwrap_or(None);
    if csrf_token.is_none() || csrf_token.unwrap() != form.get("csrf_token").cloned().unwrap_or_default() {
        return HttpResponse::Forbidden().json(serde_json::json!({"error": "CSRF validation failed"}));
    }

    let name = form.get("name").cloned().unwrap_or_default();
    if name.is_empty() {
        return HttpResponse::BadRequest().json(serde_json::json!({"error": "Invalid input"}));
    }

    HttpResponse::Ok().json(serde_json::json!({"message": "Data submitted securely"}))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env::set_var("RUST_LOG", "actix_web=info");

    HttpServer::new(|| {
        App::new()
            .wrap(SessionMiddleware::new(
                CookieSessionStore::default(),
                actix_web::cookie::Key::generate()
            ))
            .wrap(middleware::Logger::default())
            .wrap_fn(security_headers_middleware)
            .route("/", web::get().to(index))
            .route("/submit", web::post().to(submit))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}