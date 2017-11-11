const http = require('http');
const querystring = require('querystring');

const router = require('../router/router');

class Server {
	constructor () {
		this.hostname = '127.0.0.1';
		this.port = 2000;
		this.handlers = {};
		this.router = null;
		this.server = http.createServer((req, res) => {
			// TODO: implement middleware here with callback when multiple
			//       items are in use.
			this.router.handle(req, res);
		});
		this.server.listen(this.port, this.hostname);
	}

	set () {

	}

	use (router) {
		this.router = router;
	}
}

module.exports = Server;
