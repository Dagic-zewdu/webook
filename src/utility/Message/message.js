const Message = require("../../db/messageSchema");

const getMessages = async () => {
  try {
    const messages = await Message.find();
    return messages.reverse();
  } catch (err) {
    console.log(err);
    return [];
  }
};

const createMessage = async (message) => {
  try {
    const mess = new Messsage(message);
    const data = await mess.save();
    return { data, error: false };
  } catch (err) {
    console.log(err);
    return { data: err, error: true };
  }
};

const updateMessage = async (id, message) => {
  try {
    const mess = await Message.findByIdAndUpdate(id, message);
    return { error: false, data: mess };
  } catch (err) {
    return { error: true, data: undefined };
  }
};
const DeleteMessage = async (id) => {
  try {
    const mess = await Message.findByIdAndDelete(id);
    return { error: false, data: mess };
  } catch (err) {
    return { error: true, data: undefined };
  }
};

module.exports = { getMessages, createMessage, updateMessage, DeleteMessage };
