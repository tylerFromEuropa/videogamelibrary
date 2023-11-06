const mongoose = require("mongoose");

const { Schema } = mongoose;

const gameSchema = new Schema({
  title: String,
  year: Number,
  developer: String,
  publisher: String,
  ign_rating: Number,
  description: String,
  genre: Array,
  recommended: Boolean,
  cover_url: String,
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
