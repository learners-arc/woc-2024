const mongoose = require("mongoose");
const debuglog = require("debug")("development:mongooseconfig");

mongoose.connect("mongodb://localhost:27017/testingauth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Log error message properly
db.on("error", (err) => debuglog("connection error:", err));

db.on("open", function () {
  debuglog("Connected to MongoDB");
});

module.exports = db;
