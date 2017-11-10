const http = require('http');
const url = require('url');
const querystring = require('querystring');

const router = require('../router/router');

class Server {
	constructor () {
		this.hostname = '127.0.0.1';
		this.port = 2000;
		this.handlers = {};
		this.server = http.createServer((req, res) => {
			res.statusCode = 200;
		  res.setHeader('Content-Type', 'text/plain');
		  res.end('Hello World\n');

	    const pathName = url.parse(req.url).pathname;
	    const query = url.parse(req.url).query;
	    console.log('pathName: ' + pathName);
	    console.log('query: ' + query);
		});
		this.server.listen(this.port, this.hostname);
	}

	set () {

	}

	use (url, method) {

	}
}

module.exports = Server;
