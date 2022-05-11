const jsonServer = require('json-server');
const jsonServerAuth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({
    static: './build',
    jsonServerAuth,
});

const PORT = process.env.PORT || 4444;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log('Server is running');
});
