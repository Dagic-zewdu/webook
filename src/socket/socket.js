const {
  emitLetterrs,
  createLetter,
  editLetter,
  deleteLetter,
  getLetters,
} = require("../utility/letter");
const {
  saveMessage,
  getMessages,
  updateMessages,
  deleteMessage,
  deleteLetterMessage,
} = require("../utility/messages");
const Account = require("../db/userSchema");
const webSocket = (io) =>
  io.on("connection", (socket) => {
    var emp_id;
    /**onConnect save the the connected user to db */
    socket.on("onConnect", (data) => {
      console.log(data)
      emp_id = data.emp_id;
      emp_id ? updateConnection(data.emp_id, true, io) : () => { };
    });
    socket.on("users", async () => {
      const users = await Account.find();
      io.sockets.emit("users", users);
    });
    socket.emit("outgoing data", new Date());

    /**recieving chat from client */
    socket.on("submit", (data) => {
      saveMessage(data, io);
    }); //for saving message
    socket.on("update", (data) => updateMessages(data, io)); //for updating message
    socket.on("delete", (data) => deleteMessage(data, io)); // for deleting message
    socket.on("delete_letter_message", (data) => deleteLetterMessage(data, io)); // for deleting message
    /**typing broadcast */
    socket.on("typing", (data) =>
      io.sockets.emit("typing", { emp_id: data.emp_id })
    );
    socket.on("typing_letter", (data) =>
      io.sockets.emit("typing_letter", { emp_id: data.emp_id })
    );

    /**sending chat message */
    socket.on("chat", async () => {
      const messages = await getMessages();
      io.sockets.emit("chat", messages);
    });

    /**updating chat message */
    socket.on("update", (data) => updateMessages(data, io));

    /**letter on socket connection */
    socket.on("letters", async () => {
      const letters = await getLetters();
      io.sockets.emit("letters", letters);
    });
    socket.on("create_letter", (data) => createLetter(data, io)); //create letter
    socket.on("update_letter", (data) => editLetter(data, io)); //update letter
    socket.on("delete_letter", (data) => deleteLetter(data, io)); //delete letter

    /**update db while user is diconnected */
    socket.on("disConnect", data => {
      emp_id = data.emp_id ? data.emp_id : emp_id
        ? updateConnection(emp_id, false, io)
        : () => { };
    });
    socket.on("disconnect", () => {
      emp_id ? updateConnection(emp_id, false, io) : () => { };
    });
  });

/** */
const updateConnection = async (emp_id, connected, io) => {
  try {
    const Account = await Account.find({ emp_id });
    if (connected) {
      if ((Account ? true : false) && Account.status !== "disConnected") {
        await Account.findByIdAndUpdate(Account._id, {
          ...Account,
          status: "connected",
          connected_time: Date.now,
        });
        let acc = await Account.find({});
        let connected = await Account.find({ status: "connected" })
        console.log(connected.length + " account connected")
        io.sockets.emit("users", acc);
      }
    } else {
      await account.findByIdAndUpdate(Account._id, {
        ...Account,
        status: "disConnected",
        disconnected_time: Date.now,
      });
      let acc = await Account.find({});
      let connected = await Account.find({ status: "connected" })
      console.log(connected.length + " account connected")
      io.sockets.emit("users", acc);
    }
  } catch (err) {
    return { error: true, data: undefined };
  }
};
module.exports = webSocket;
