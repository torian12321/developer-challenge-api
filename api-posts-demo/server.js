const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./api/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9001;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`Test Custom Data API listening on port ${port}!`)
});