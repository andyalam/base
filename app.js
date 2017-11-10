require('./lib/env/env').load();
const Server = require('./lib/server/server');
const Router = require('./lib/router/router');

const server = new Server();
const router = new Router();
router.register('/', function (req, res) {
	console.log('hit');
});
server.use(router);

module.exports = server;
