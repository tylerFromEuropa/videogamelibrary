const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

const mongoose = require("mongoose");
const Game = require("./models/game");

mongoose.connect(process.env.MONGODB_LINK);

app.get("/", (_, response) => {
  response.json("You are looking at my root route. Roude.");
});

app.get("/games", async (request, response) => {
  const games = await Game.find();
  response.json(games);
});

app.post("/games", async (request, response) => {
  const newGame = await Game.create(request.body);
  response.json(newGame);
});


// Edit Route
app.put("/games/:id", async (request, response) => {

  const updatedGame = await Game.findByIdAndUpdate(request.params.id, request.body);
  response.json(updatedGame);
  
}) 


app.delete("/games/:id", async (request, response) => {
  const deletedGame = await Game.findByIdAndDelete(request.params.id);
  response.json(deletedGame);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
