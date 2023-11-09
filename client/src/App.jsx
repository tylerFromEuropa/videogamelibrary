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
    let byebyebye = new Audio("/byebyebye.mp3");
    byebyebye.volume = 0.1;
    const playByebyebye = () => {
        byebyebye.play();
    };
    useEffect(() => {
        getGames();
    }, []);

    async function getGames() {
        const API = `https://videogamelibrary.onrender.com/games`;
        const res = await axios.get(API);
        setGames(res.data);
    }

    async function deleteGame(id) {
        const check = confirm("To shreds you say?");
        if (check) {
            const API = `https://videogamelibrary.onrender.com/games/${id}`;
            await axios.delete(API);
            getGames();
            playByebyebye();
        }
    }

    return (
        <BrowserRouter>
            <h1>Video game library</h1>
            <p>Our most recommended games in the world. And a few that suck.</p>
            <Routes>
                <Route path="/" element={<Home games={games} setGames={setGames} deleteGame={deleteGame} />} />
                <Route path="/game/:id" element={<Game />} />
            </Routes>

            {/* <Form setGames={setGames} games={games} /> */}
            {/* <Games games={games} deleteGame={deleteGame} /> */}
        </BrowserRouter>
    );
}
export default App;
