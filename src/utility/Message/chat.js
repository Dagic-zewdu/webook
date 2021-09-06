const { getMessages, createMessage } = require("./message");

const getChats = async (io) => io.sockets.emit("Messages", await getMessages());

const saveChat = async (message, io) => {
  const save = await createMessage(message);
  io.sockets.emit("Messages", await getMessages());
};
