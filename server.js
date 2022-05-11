const jsonServer = require('json-server');
const jsonServerAuth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({
    static: './build',
});

const PORT = process.env.PORT || 4444;

server.db = router.db

server.use(jsonServerAuth);
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log('Server is running');
});

// const jsonServer = require('json-server')
// const auth = require('json-server-auth')

// const app = jsonServer.create()
// const router = jsonServer.router('db.json')

// // /!\ Bind the router db to the app
// app.db = router.db

// // You must apply the auth middleware before the router
// app.use(auth)
// app.use(router)
// app.listen(3000)
