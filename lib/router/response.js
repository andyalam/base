const http = require('http');

class Response extends http.ServerResponse.prototype {
	constructor () {
		super();
	}
}

exports.Response = Response;
