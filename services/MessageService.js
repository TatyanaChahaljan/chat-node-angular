const Message = require('./../models/Message');

class MessageService {
  static saveMessageInDB(data) {
    return (new Message(data)).save();
  }
}

module.exports = MessageService;
