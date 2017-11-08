const fs = require('fs');

class Env {
	static load (path = './') {
		const buffer = fs.readFileSync(`${path}.env`);
		const json = JSON.parse(buffer.toString('utf-8'));
		Env.setEnvironmentVariables(json);
	}

	static setEnvironmentVariables (json = {}) {
		Object.keys(json).forEach(key => {
			process.env[key] = json[key];
		});
	}
}

module.exports = Env;
