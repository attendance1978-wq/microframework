from http.server import BaseHTTPRequestHandler, HTTPServer
from .core import MicroApp


app = MicroApp()


class _Handler(BaseHTTPRequestHandler):
def do_GET(self):
code, body = app.handle(self.path)
self.send_response(code)
self.send_header('Content-type','text/html')
self.end_headers()
self.wfile.write(body.encode('utf-8'))


def serve(host='127.0.0.1', port=8000):
httpd = HTTPServer((host, port), _Handler)
print(f"Serving on http://{host}:{port}")
httpd.serve_forever()
