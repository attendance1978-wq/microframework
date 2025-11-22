class MicroApp:
def __init__(self):
self.routes = {}


def route(self, path):
def decorator(fn):
self.routes[path] = fn
return fn
return decorator


def handle(self, path):
handler = self.routes.get(path)
if handler:
return handler()
return (404, 'Not Found')
