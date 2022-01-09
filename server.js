const express = require("express");
const app = express();
const path = require("path");
const bodyParsar = require("mongodb");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const URI = process.env.MONGODB_URI || "mongodb://localhost/database";
const PORT = process.env.PORT || 5000;
const DB_NAME = process.env.DB_NAME;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/secret", (req, res) =>
  res.sendFile(path.join(__dirname, "secret.html"))
);
