from microframe.server import serve, app


@app.route('/')
def index():
return (200, '<h1>Hello from MicroFrame!</h1>')


if __name__ == '__main__':
serve()
