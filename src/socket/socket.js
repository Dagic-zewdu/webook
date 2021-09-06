const account = require("../db/userSchema");
const webSocket = (io) =>
  io.on("connection", (socket) => {
    var emp_id;
    //on connect
    socket.on("onConnect", (data) => {
      emp_id = data.emp_id;
      emp_id ? updateConnection(emp_id, true) : () => {};
    });
    socket.on("disconnect", (data) => {
      emp_id ? updateConnection(emp_id, false) : () => {};
    });
  });

/**connection  time */
const updateConnection = async (emp_id, connected, io) => {
  try {
    const Account = await account.find({ emp_id });
    if (Account.length > 0) {
      const data = connected
        ? await account.findByIdAndUpdate(Account[0]._id, {
            //connected time
            ...Account[0],
            connected_time: Date.now,
          })
        : await account.findByIdAndUpdate(Account[0]._id, {
            //disconnected time
            ...Account[0],
            disconnected_time: Date.now,
          });
      io.sockets.emit("Accounts", await account.find());
    }
  } catch (err) {
    return { error: true, data: undefined };
  }
};
module.exports = webSocket;
