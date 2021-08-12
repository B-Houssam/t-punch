const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
//const MongoClient = require("mongodb").MongoClient;
//const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

var signin = {
  username: "",
  password: "",
};

var show = {
  username: "",
  nickname: "",
};

//middlewares
//app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/login", async (req, res, next) => {
  //console.log(req.body);
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tpunch");
    dbo.collection("user").findOne({}, function (err, result) {
      if (err) {
        throw err;
      } else {
        signin.username = result.username;
        signin.password = result.password;
        //console.log(user.password);
        if (
          req.body.username === result.username &&
          req.body.password === result.password
        ) {
          //if user log in success, generate a JWT token for the user with a secret key
          jwt.sign(
            { signin },
            "hbhb",
            { expiresIn: 3 * 24 * 60 * 60 * 1000 },
            (err, token) => {
              if (err) {
                console.log(err);
              }
              res.send({
                status: true,
                token: token,
              });
              /*
              res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 3 * 24 * 60 * 60 * 1000,
              });
              */
            }
          );
        } else {
          console.log("ERROR: Could not log in");
          res.status(500);
          res.send({
            status: false,
          });
        }
        db.close();
      }
    });
  });
});

app.get("/show", async (req, res) => {
  //console.log(req.body);
  try {
    MongoClient.connect(url, function (err, db) {
      var dbo = db.db("tpunch");
      dbo.collection("user").findOne({}, function (err, result) {
        if (err) {
          throw err;
        } else {
          show.username = result.username;
          show.nickname = result.nickname;
          //console.log(user.password);
          res.send({
            status: true,
            show: show,
          });
          db.close();
        }
      });
    });
  } catch (error) {
    res.status(500);
    res.send({
      status: false,
    });
  }
});

app.post("/update", async (req, res) => {
  //console.log(req.body.old);
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tpunch");
    var myquery = { username: req.body.old };
    var newvalues = {
      $set: {
        username: req.body.key,
        password: req.body.password,
        nickname: req.body.nickname,
      },
    };
    dbo
      .collection("user")
      .updateOne(myquery, newvalues, function (err, result) {
        if (err) {
          throw err;
          res.status(500);
          res.send({ status: false });
        } else {
          res.send({ status: true });
        }
        db.close();
      });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
