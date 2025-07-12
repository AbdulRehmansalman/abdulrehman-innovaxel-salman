const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const urlRoutes = require("./routes/urlRouter");

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

app.use("/shorten", urlRoutes);

// For testing Purposes
// const urlSchema = require("./model/schema");

// urlSchema
//   .find()
//   .then((data) => console.log("Stored Documents:", data))
//   .catch((err) => console.error("Error fetching documents:", err));
const port = process.env.PORT || 3000;
app.listen(port, console.log("server running on my port 3000"));
