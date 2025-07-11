const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

async function connectDb() {
  const url = process.env.MONGODB_URI;
  if (!url) {
    console.log("Mongo Url Connection not Found");
  }

  try {
    await mongoose.connect(url);
    console.log("connected to Database");
  } catch (err) {
    console.log("Not connected", err.message);
  }
}

connectDb();
const port = process.env.PORT || 3000;
app.listen(port, console.log("server running on my port 3000"));
