const constants = require('../constants');
const UtilsService = require('../services/UtilsService');
const moment = require('moment');

class SocketService {

  static useSocket(socket, io) {

    socket.on(constants.DISCONNECT, async () => {
      const [user] = await UtilsService.getUser(socket.id);
      if (!user) {
        return;
      }
      const { data } = user;
      io.emit(constants.DISCONNECT, { type: constants.DISCONNECT, data });
    });

    socket.on(constants.USER_CONNECT, async (username) => {
      const saveData = {
        type: constants.NEW_USER, data: {
          name: username,
          socketId: socket.id
        }
      };
      await UtilsService.saveUserInDB(saveData);
      io.emit(constants.NEW_USER, saveData);
    });

    socket.on(constants.ADD_MESSAGE, async (data) => {
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
      await UtilsService.saveMessageInDB(saveData);
      io.emit(constants.NEW_MESSAGE, saveData);
    });
  }
}

module.exports = SocketService;