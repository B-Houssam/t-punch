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

//Check to make sure header is not undefined, if so, return Forbidden (403)
const checkToken = (req, res, next) => {
  const header = req.headers["authorization"];

  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];

    req.token = token;
    next();
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
};

//This is a protected route
app.get("/protected", checkToken, (req, res) => {
  //verify the JWT token generated for the user
  jwt.verify(req.token, "privatekey", (err, authorizedData) => {
    if (err) {
      //If error send Forbidden (403)
      console.log("ERROR: Could not connect to the protected route");
      res.sendStatus(403);
    } else {
      //If token is successfully verified, we can send the autorized data
      res.json({
        message: "Successful log in",
        authorizedData,
      });
      console.log("SUCCESS: Connected to protected route");
    }
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
