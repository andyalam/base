const http = require('http');

class Request extends http.IncomingMessage.prototype {
	constructor () {
		super();
	}
}

exports.Request = Request;
