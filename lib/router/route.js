class Route {
	constructor (url, method) {
		this.url = url;
		this.process = (req, res) => {
	    const params = null;
	    return method.apply(this, [req, res, params]);
	  };
	}
}

exports.createRoute = (url, method) => {
  return new Route(url, method);
}
