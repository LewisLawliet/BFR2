const http = require('http');
const app = require('./app');

app.set('port', 3200 || process.env.PORT);
const server = http.createServer(app);

server.listen(process.env.PORT || 3200);