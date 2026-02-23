import http.server, socketserver, webbrowser
import os

PORT = 8000
# Points to the current directory instead of /mev
DIRECTORY = "."

class MEVHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        if self.path == '/':
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            content = "<html><script>new SpeechSynthesisUtterance('connected').speak(); setTimeout(()=>location.href='/index.html',500)</script></html>"
            self.wfile.write(content.encode())
        else:
            super().do_GET()

with socketserver.TCPServer(("", PORT), MEVHandler) as httpd:
    print(f"Serving at http://127.0.0.1:{PORT}")
    webbrowser.open(f"http://127.0.0.1:{PORT}")
    httpd.serve_forever()
