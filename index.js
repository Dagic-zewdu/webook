
const express=require('express');
const app=express()
const { port } = require('./config/config');
const bodyParser=require('body-parser')
const cors=require('cors');
const webSocket = require('./src/socket/socket');
const socketIo=require('socket.io');
const router = require('./src/route');
const connection=require('./src/db/connection')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(router)
const server = require("http").createServer(app);
const io = socketIo(server, {
    cors: {
      origin: "http://192.168.8.101:9000",
      methods: ["GET", "POST", "PUT"],
    },
  });
  webSocket(io)

  server.listen(port, (err) => {
    if (err) console.log(err);
    console.log("Server up and running on localhost:" + port);
  });