const User = require('./../models/User');

class UserService {
  static saveUserInDB(data) {
    return (new User(data)).save();
  }
  static getUser(socketId) {
    return User.find({ 'data.socketId': socketId });
  }
}

module.exports = UserService;
