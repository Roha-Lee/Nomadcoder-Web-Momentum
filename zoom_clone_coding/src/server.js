import http from 'http';
import WebSocket from 'ws';
import express from 'express';

const app = express();
const sockets = [];// fake database
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);
app.use('/public', express.static(`${__dirname}/public`));
app.get('/', (_, res) => res.render('home'));
app.get('/*', (_, res) => res.redirect('/'));

const handleListen = () => console.log('Listening on http://localhost:3000');
const server = http.createServer(app);
const wss = new WebSocket.Server({ server }); // 이렇게 해야 http, wss둘다 같은 포트에서 돌릴수 있다.
wss.on('connection', (socket) => {
  sockets.push(socket);
  console.log('Connected to Browser.');
  socket.on('close', () => {
    console.log('Disconnect from Browser.');
  });
  socket.on('message', (message) => {
    console.log(`New message: ${message}`);
    sockets.forEach((aSocket) => aSocket.send(message));
  });
});
server.listen(3000, handleListen);
