const mongoose = require("mongoose");

const urlschema = new mongoose.Schema({
  originalurl: {
    type: String,
    required: true,
  },
  shortcode: {
    type: String,
    required: true,
    unique: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  accessCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("schema", urlschema);
