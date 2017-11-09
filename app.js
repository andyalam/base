require('./lib/env/env').load();
const Server = require('./lib/server/server');

const server = new Server();

module.exports = server;
