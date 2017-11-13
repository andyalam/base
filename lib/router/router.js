const fs = require('fs');
const url = require('url');
const { URL } = url;

const { HOSTNAME, PORT, PROTOCOL } = require('../config');
const routeFactory = require('./route');

class Router {
	constructor () {
		this.routes = {};
		this.baseUrl = `${PROTOCOL}${HOSTNAME}:${PORT}`;
	}

	clear () {
		this.routes = {};
	}

	// TODO: switch over to get/post/delete/etc
	register (endpoint, method) {
		const url = new URL(this.baseUrl + endpoint);
		const keyPathName = Router.parsePath(url);
		const route = routeFactory.createRoute(url, method);
		this.routes[keyPathName] = route;
	}

	handle (req, res) {
		const url = new URL(this.baseUrl + req.url);
		const keyPathName = Router.parsePath(url);
		const route = this.routes[keyPathName];
		if (route) {
			route.process(req, res);
		} else {
			// TODO: error handler ? pass of to next middleware?
		}
	}

	static parsePath (url) {
		let keyPathName;
		if (url.pathname[url.pathname.length - 1] === '/') {
			keyPathName = url.pathname.substr(0, url.pathname.length - 1);
		} else {
			keyPathName = url.pathname;
		}
		return keyPathName;
	}
}

module.exports = Router;
