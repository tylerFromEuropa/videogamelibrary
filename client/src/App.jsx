import Games from "./Components/Games";
import Form from "./Components/Form";
import Home from "./Page/Home";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Game from "./Page/Game";

function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getGames();
  }, []);

  async function getGames() {
    const API = `http://localhost:8080/games`;
    const res = await axios.get(API);
    setGames(res.data);
  }

  async function deleteGame(id) {
    const check = confirm("To shreds you say?");
    if (check) {
      const API = `http://localhost:8080/games/${id}`;
      await axios.delete(API);
      getGames();
    }
  }

  return (
    <BrowserRouter>
      <h1>Video game library</h1>
      <p>Our most recommended games in the world. And a few that suck.</p>
      <Routes>
        <Route
          path="/"
          element={
            <Home games={games} setGames={setGames} deleteGame={deleteGame} />
          }
        />
        <Route path="/game/:id" element={<Game />} />
      </Routes>

      {/* <Form setGames={setGames} games={games} /> */}
      {/* <Games games={games} deleteGame={deleteGame} /> */}
    </BrowserRouter>
  );
}
export default App;
