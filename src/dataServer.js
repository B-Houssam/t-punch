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
    dates = [];
    for (let index = 0; index < reslt.tweets_ids.length; index++) {
      const rslt = await db
        .collection("tweets")
        .findOne(
          { _id: ObjectId(reslt.tweets_ids[index]) },
          { sort: { post_time: -1 } }
        ); //order by date
      tweets.push(rslt);
      dates.push(rslt.post_time);
    }

    dts = [];
    for (let index = 0; index < dates.length; index++) {
      var med = "" + dates[index];
      if (!dts.includes(med.substring(0, 15))) {
        dts.push(med.substring(0, 15));
      }
    }

    ratpos = [];
    ratneg = [];
    dts.forEach((element) => {
      var pos = 0;
      var neg = 0;

      for (let index = 0; index < tweets.length; index++) {
        if (element === tweets[index].post_time.toString().substring(0, 15)) {
          if (tweets[index].label === "positive") {
            pos++;
          }
          if (tweets[index].label === "negative") {
            neg++;
          }
        }
      }
      ratpos.push(pos);
      ratneg.push(neg);
    });

    await res.send({
      query: query,
      dates: dts,
      tweets: tweets,
      ratpos: ratpos,
      ratneg: ratneg,
    });
    c.close();
  } catch (error) {
    throw error;
    res.status(500);
    res.send(res.status);
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
