const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const fs = require("fs");
const path = require("path");
const dir = "./src/dataset";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  fileUpload({
    createParentPath: true,
  })
);

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const ObjectId = require("mongodb").ObjectId;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post("/public", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No files",
      });
    } else {
      const { file } = req.files;

      fs.readdir(dir, (err, files) => {
        if (err) throw err;

        for (const f of files) {
          fs.unlink(path.join(dir, f), (err) => {
            if (err) throw err;
          });
        }
      });

      file.mv("./src/dataset/clientData.JSON");
      //add new collection after emptying it
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("tpunch");
        dbo.collection("client").deleteMany({}, function (err, result) {
          if (err) {
            console.log(err);
          }
          console.log(result);
        });
        const data = fs.readFileSync("./src/dataset/clientData.JSON");
        const docs = JSON.parse(data.toString());
        dbo.collection("client").insertMany(docs, function (err, result) {
          if (err) throw err;
          console.log("Inserted docs:", result.insertedCount);
          db.close();
        });
      });

      res.send({
        status: true,
        message: "File is uploaded",
      });
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.delete("/public", async (req, res) => {
  try {
    fs.readdir(dir, (err, files) => {
      if (err) throw err;

      for (const f of files) {
        fs.unlink(path.join(dir, f), (err) => {
          if (err) throw err;
        });
      }
    });

    res.send({
      status: true,
      message: "File is deleted",
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/public", async (req, res) => {
  try {
    fs.readdir(dir, (err, files) => {
      if (err) throw err;

      for (const f of files) {
        res.send({
          name: f,
          size: fs.statSync(path.join(dir, f)).size,
          birthtime: fs.statSync(path.join(dir, f)).birthtime,
          status: true,
        });
      }
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
