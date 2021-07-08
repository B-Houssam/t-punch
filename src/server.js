const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const morgan = require("morgan");

const fs = require("fs");
const path = require("path");
const dir = "./datasets";

const app = express();

app.use(
  fileUpload({
    createParentPath: true,
  })
);

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

      file.mv("./datasets/" + file.name);

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
