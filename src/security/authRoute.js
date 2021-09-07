const jwt = require("jsonwebtoken");
const { admin, user } = require("../../config/config");
const { decrptObject, encryptObject } = require("./encrypt");
const userauth = (req, res, next) => {
  const decrypt = decrptObject(req.body.data);
  const { token, usertype } = decrypt;
  if (!token ? true : false) {
    let Data = encryptObject({
      message: "Access Denied",
      auth: false,
      error: true,
    });
    res.status(200).send(Data);
  } else {
    try {
      if (usertype === "user") {
        const verify = jwt.verify(token, user);
        req.user = verify;
        next();
      } else {
        let data = encryptObject({
          message: "Invalid user usertype",
          auth: false,
          error: true,
        });
        res.status(200).send(data);
      }
    } catch (err) {
      console.log(err);
      let data = encryptObject({
        message: "Invalid user token",
        auth: false,
        error: true,
      });
      res.status(200).send(data);
    }
  }
};

const adminAuth = (req, res, next) => {
  try {
    const decrypt = decrptObject(req.body.data);
    const { token } = decrypt;

    if (!token ? true : false) {
      let Data = encryptObject({
        message: "Access Denied",
        auth: false,
        error: true,
      });
      res.status(200).send(Data);
    } else {
      const verify = jwt.verify(token, admin);
      req.user = verify;
      next();
    }
  } catch (err) {
    console.log(err);
    let data = encryptObject({
      message: "Invalid user token",
      auth: false,
      error: true,
    });
    res.status(200).send(data);
  }
};
const allAuth = (req, res, next) => {
  try {
    const decrypt = req.headers.data
      ? decrptObject(req.headers.data)
      : { token: "", usertype: "" };
    const { token, user_type: usertype } = decrypt;
    if (!token ? true : false) {
      let Data = encryptObject({
        message: "Access Denied",
        auth: false,
        error: true,
      });
      res.status(200).send(Data);
    } else {
      try {
        if (usertype === "user") {
          const verify = jwt.verify(token, user);
          req.user = verify;
          next();
        } else if (usertype === "admin") {
          const verify = jwt.verify(token, admin);
          req.user = verify;
          next();
        } else {
          let data = encryptObject({
            message: "Invalid user usertype",
            auth: false,
            error: true,
          });
          res.status(200).send(data);
        }
      } catch (err) {
        console.log(err);
        let data = encryptObject({
          message: "Invalid user token",
          auth: false,
          error: true,
        });
        res.status(200).send(data);
      }
    }
  } catch (err) {
    console.log(err);
    let data = encryptObject({
      message: "Error occur while processing",
      auth: false,
      error: true,
      err,
    });
    res.status(200).send(data);
  }
};
module.exports = { userauth, adminAuth, allAuth };
