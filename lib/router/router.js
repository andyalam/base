const fs = require('fs');
const parser = require('url');

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
		const url = parser.parse(req.url, true);
	  const handler = handlers[url.pathname];
	  return handler;
	}
}

module.exports = Router;
