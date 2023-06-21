const mongoose = require('mongoose');

const chatbotSchema = new mongoose.Schema({
  cond: String, //study condistion they are in
  
}, { timestamps: true });

const Chatbot = mongoose.model('Chatbot', chatbotSchema);

module.exports = Chatbot;

