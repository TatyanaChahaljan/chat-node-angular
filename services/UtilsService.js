const User = require('./../models/User');
const Message = require('./../models/Message');

class UtilsService {
  static async saveUserInDB(data) {
    try {
      const newUser = new User(data);
      await newUser.save();
    } catch (err) {
      // console.log('err' + err);
    }
  }

  static async saveMessageInDB(data) {
    try {
      const newMessage = new Message(data);
      await newMessage.save();
    } catch (err) {
      // console.log('err' + err);
    }
  }

  static getUser(socketId) {
    return User.find({ 'data.socketId': socketId });
  }
}

module.exports = UtilsService;
