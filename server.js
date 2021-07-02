/* eslint-disable @typescript-eslint/no-var-requires */
const jsonServer = require('json-server');
const server = jsonServer.create();
var cors = require('cors');
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors());
server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running');
});
