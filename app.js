require('./lib/env/env').load();
const { Server } = require('./lib');
const { Router } = require('./lib');

const router = new Router();
const testRoute = (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end('{"test": "Success"}');
};
router.register('/', testRoute);
router.register('/health', testRoute);
console.log(router);

const server = new Server();
server.use(router);

module.exports = server;
