const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  type: String,
  data: {
    message: String,
    socketId: String,
    time: String,
    user: String,
    color: String
  }
});

module.exports = mongoose.model("Message", messageSchema);