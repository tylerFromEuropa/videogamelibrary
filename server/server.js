const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = 8080;

const mongoose = require("mongoose");
const Game = require("./models/game");
mongoose.connect(process.env.MONGODB_LINK);

app.get("/", (_, response) => {
  response.json("You are looking at my root route. Roude.");
});

app.get("/games", async (request, response) => {
  const games = await Game.find(request.query);
  response.json(games);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
