import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../Components/Form";
import { Link } from "react-router-dom";

export default function Game() {
  const [game, setGame] = useState({});
  const params = useParams();

  useEffect(() => {
    getGame();
  }, []);

  async function getGame() {
    const API = `http://localhost:8080/games?_id=${params.id}`;
    const res = await axios.get(API);
    setGame(res.data[0]);
  }

  return (
    <div>
      <Link to="/">Go home</Link>
      <div key={game._id} className="game">
        <h2>{game.title}</h2>
        <img
          className="gamecover"
          src={game.cover_url}
          alt={game.title}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://placehold.co/600x400";
          }}
        />
        <p>{game.description}</p>
        <p>Year: {game.year}</p>
        <p>Genre: {game.genre}</p>
        <p>Rating: {game.ign_rating}</p>
        {game.title && <Form game={game} setGame={setGame} getGame={getGame} />}
      </div>
    </div>
  );
}
