const constants = require('../constants');
const SocketController = require('../controllers/SocketController');

const connection = (socket, io) => {
  socket.on(constants.DISCONNECT, () => SocketController.disconnect(socket, io));
  socket.on(constants.USER_CONNECT, data => SocketController.connect(socket, io, data));
  socket.on(constants.ADD_MESSAGE, data => SocketController.addMessage(socket, io, data));
};

module.exports = { connection };
