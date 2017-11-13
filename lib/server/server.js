const http = require('http');
const querystring = require('querystring');

const { HOSTNAME, PORT } = require('../config');
const router = require('../router/router');

class Server {
	constructor () {
		this.HOSTNAME = HOSTNAME;
		this.PORT = PORT;
		this.handlers = {};
		this.router = null;
		this.server = http.createServer((req, res) => {
			// TODO: implement middleware here with callback when multiple
			//       items are in use.
			this.router.handle(req, res);
		});
		this.server.listen(this.PORT, this.HOSTNAME);
	}

	set () {

	}

	use (router) {
		this.router = router;
	}
}

module.exports = Server;
