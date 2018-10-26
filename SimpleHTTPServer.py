# basic webserver serves files relative to the current directory
#       python -m http.server 8000 --bind 127.0.0.1
# or    python -m http.server 8000 --bind localhost

import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()