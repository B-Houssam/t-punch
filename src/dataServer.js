const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const ObjectId = require("mongodb").ObjectId;

const addHist = async (obj) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tpunch");
    dbo.collection("history").insertOne(obj, function (err, result) {
      if (err) {
        throw err;
      } else {
        db.close();
      }
    });
  });
};

app.post("/newanal", async (req, res) => {
  //console.log(req.body.query);
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tpunch");
    //delete all before
    dbo.collection("current").deleteMany({}, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
    var myObj = { query: req.body.query, date: new Date() };
    addHist(myObj);
    dbo.collection("current").insertOne(myObj, function (err, result) {
      if (err) {
        throw err;
        res.status(500);
        res.send({ status: false });
      } else {
        res.send({ status: true });
        db.close();
      }
    });
  });
});

app.get("/getanal", async (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tpunch");
    dbo
      .collection("history")
      .find()
      .toArray(function (err, result) {
        if (err) {
          throw err;
          res.status(500);
        } else {
          res.status(200);
          res.send({ data: result, status: result.status });
        }
        db.close();
      });
  });
});

app.get("/getquery", async (req, res) => {
  try {
    const c = await MongoClient.connect(url);
    const db = c.db("tpunch");
    const rs = await db.collection("current").findOne({});
    const query = await db
      .collection("extracted")
      .findOne({ query: rs.query }, { projection: { tweets_ids: 0 } });
    const reslt = await db
      .collection("extracted")
      .findOne({ query: rs.query }, { projection: { tweets_ids: 1, _id: 0 } });
    tweets = [];
    for (let index = 0; index < reslt.tweets_ids.length; index++) {
      const rslt = await db
        .collection("twwets")
        .findOne({ _id: ObjectId(reslt.tweets_ids[25]) });
      tweets.push(rslt);
    }
    await res.send({ query: query, tweets: tweets });
    c.close();
  } catch (error) {
    throw error;
    res.status(500);
    res.send(res.status);
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
