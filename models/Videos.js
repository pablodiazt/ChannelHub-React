const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: { type: String, required: true },

  author: { type: String, required: false },
  time: {type: [String], required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
},
{ timestamps: true },
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
