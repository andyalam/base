const fs = require('fs');

class Env {
	static load (path = './') {
		const buffer = fs.readFileSync(`${path}.env`);
		const json = JSON.parse(buffer.toString('utf-8'));
		Env.setEnvironmentVariables(json);
	}

	static setEnvironmentVariables (json = {}) {
		console.log(json);
	}
}

module.exports = Env;
