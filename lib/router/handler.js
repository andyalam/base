class Handler {
	constructor (method) {
		this.process = (req, res) => {
	    const params = null;
	    return method.apply(this, [req, res, params]);
	  }
	}
}

exports.createHandler = (method) => {
  return new Handler(method);
}
