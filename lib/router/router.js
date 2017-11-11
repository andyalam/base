const fs = require('fs');
const URL = require('url');

const handlerFactory = require('./handler');

class Router {
	constructor () {
		this.handlers = {};
	}

	clear () {
		this.handlers = {};
	}

	register (url, method) {
		this.handlers[url] = handlerFactory.createHandler(method);
	}

	route (req) {
		const url = URL.parse(req.url, true);
	  const handler = handlers[url.pathname];
	  return handler;
	}

	handle (req, res) {
		const pathName = URL.parse(req.url).pathname;
		const query = URL.parse(req.url).query;
		console.log('pathName: ' + pathName);
		console.log('query: ' + query);
		console.log(this.handlers[pathName]);
		const endpoint =  this.handlers[pathName];
		if (endpoint) {
			endpoint.process(req, res);
		} else {
			// TODO: error handler ? pass of to next middleware?
		}
	}
}

module.exports = Router;
