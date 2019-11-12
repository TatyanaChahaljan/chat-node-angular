const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const routes = require('./routers/ws');
require('dotenv').config();

app.use(express.static(__dirname + '/dist/chat-node-angular'));
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

io.on('connection', (socket) => {
  routes.connection(socket, io);
});

/*  end data save */
http.listen(process.env.PORT, () => {
  console.log(`started on port ${process.env.PORT}`);
});
