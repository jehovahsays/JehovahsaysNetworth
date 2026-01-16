from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.parse
import sys

class SecurityLessonGate(BaseHTTPRequestHandler):
    
    def get_html_template(self, color, status):
        """The UI for the developer example"""
        return f"""
        <html>
        <head><meta name="viewport" content="width=device-width, initial-scale=1"></head>
        <body style="background: #000; color: {color}; font-family: monospace; padding: 30px;">
            <div style="border: 2px solid {color}; padding: 20px; max-width: 450px;">
                <h1 style="text-transform: uppercase;">STATUS: {status}</h1>
                <hr style="border: 1px solid {color};">
                
                <form action="/" method="POST">
                    <input type="hidden" name="signature" value="human">
                    
                    <p>Manual Entry (test):</p>
                    <input type="text" name="keyword" autocomplete="off" 
                           style="background: #111; color: {color}; border: 1px solid {color}; width: 100%; padding: 5px;">
                    <br><br>
                    <input type="submit" value="VERIFY SIGNATURE" 
                           style="background: {color}; color: #000; border: none; padding: 10px; width: 100%; font-weight: bold;">
                </form>
            </div>
        </body>
        </html>
        """

    def do_GET(self):
        try:
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            # Initial State is RED
            content = self.get_html_template("red", "LOCKED")
            self.wfile.write(bytes(content, "utf-8"))
        except (BrokenPipeError, ConnectionResetError):
            pass

    def do_POST(self):
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            params = urllib.parse.parse_qs(post_data.decode('utf-8'))

            # Retrieve Keyword and Hidden Signature
            user_word = params.get('keyword', [''])[0].strip().lower()
            hidden_sig = params.get('signature', [''])[0]

            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()

            # The Verification Logic
            if user_word == "test" and hidden_sig == "human":
                # Success State is GREEN
                content = self.get_html_template("green", "VERIFIED")
            else:
                # Failure State remains RED
                content = self.get_html_template("red", "DENIED")

            self.wfile.write(bytes(content, "utf-8"))
        except (BrokenPipeError, ConnectionResetError):
            # This silently catches the mobile browser 'Broken Pipe' error
            pass

    def log_message(self, format, *args):
        # Keeps the console clean by only logging the important hits
        sys.stderr.write("%s - - [%s] %s\n" %
                         (self.address_string(),
                          self.log_date_time_string(),
                          format%args))

if __name__ == "__main__":
    # Change 8080 to 9000 if you still get 'Address in use'
    port = 8080
    server = HTTPServer(('localhost', port), SecurityLessonGate)
    print(f"Developer Lab active at http://localhost:{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
        print("\nServer Stopped.")