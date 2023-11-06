import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getGames();
  }, []);

  async function getGames() {
    const API = `http://localhost:8080/games`;
    const res = await axios.get(API);
    setGames(res.data);
    return (
      <>
        <h1>Video game library</h1>
        <p>Our most recommended games in the world. And a few that suck.</p>
        {games.map((game) => {
          return (
            <div key={game._id}>
              <h2>{game.title}</h2>
            </div>
          );
        })}
      </>
    );
  }
}
export default App;
