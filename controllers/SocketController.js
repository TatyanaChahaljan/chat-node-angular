const MessageService = require('../services/MessageService');
const UserService = require('../services/UserService');
const constants = require('../constants');
const moment = require('moment');

class SocketController {
  static async disconnect(socket, io) {
    const [user] = await  UserService.getUser(socket.id);
    if (!user) {
      return;
    }
    const { data } = user;
    io.emit(constants.DISCONNECT, { type: constants.DISCONNECT, data });
  }

  static async connect(socket, io, username) {
    const saveData = {
      type: constants.NEW_USER, data: {
        name: username,
        socketId: socket.id
      }
    };
    await UserService.saveUserInDB(saveData);
    io.emit(constants.NEW_USER, saveData);
  }

  static async addMessage(socket, io, data) {
    const saveData = {
      type: constants.NEW_MESSAGE,
      data:
        {
          message: data.message,
          time: moment().format('YYYY-MM-DD HH:mm'),
          user: data.user,
          color: data.color,
          socketId: socket.id
        }
    };
    await MessageService.saveMessageInDB(saveData);
    io.emit(constants.NEW_MESSAGE, saveData);
  }

}

module.exports = SocketController;
