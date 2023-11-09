import { useState } from "react";
import axios from "axios";

export default function Form({ setGames, games, game, setGame, getGame }) {
    const [allGenre, setAllGenre] = useState([]);
    const [formData, setFormData] = useState(
        game ?? {
            title: "",
            year: 0,
            developer: "",
            publisher: "",
            ign_rating: 0,
            description: "",
            genre: [],
            recommended: "",
            cover_url: "",
        }
    );

    function handleFormData(e) {
        if (e.target.name === "genre") {
            setAllGenre([...allGenre, e.target.value]);
            setFormData({ ...formData, genre: allGenre });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    }

    async function addGame(event) {
        event.preventDefault();
        const API = "https://videogamelibrary.onrender.com/games";
        const res = await axios.post(API, formData);
        setGames([...games, res.data]);
    }

    async function updateGame(event) {
        event.preventDefault();
        const API = `https://videogamelibrary.onrender.com/games/${game._id}`;
        const res = await axios.put(API, formData);
        setGame(formData);
        console.log(res.data[0]);
    }

    return (
        <form onSubmit={game?.title ? updateGame : addGame}>
            <div className="formfields">
                <div className="formpart">
                    <input value={formData.title} required name="title" placeholder="Title" onChange={handleFormData} />
                    <input value={formData.year} type="number" name="year" placeholder="Year" onChange={handleFormData} />
                    <input value={formData.developer} name="developer" placeholder="Developer" onChange={handleFormData} />
                    <input value={formData.publisher} name="publisher" placeholder="Publisher" onChange={handleFormData} />
                    <input value={formData.ign_rating} type="number" name="ign_rating" placeholder="Rating" onChange={handleFormData} />
                    <input value={formData.description} name="description" placeholder="Description" onChange={handleFormData} />
                    <input value={formData.cover_url} name="cover_url" placeholder="Cover URL" onChange={handleFormData} />
                </div>
                <div className="formpart">
                    <fieldset onChange={handleFormData} name="genre" required value={formData.genre}>
                        <input type="checkbox" name="genre" value="Action " id="action" />
                        <label htmlFor="action">Action</label>
                        <input type="checkbox" name="genre" value="Adventure " id="adventure" />
                        <label htmlFor="adventure">Adventure</label>
                        <input type="checkbox" name="genre" value="Simulation " id="simulation" />
                        <label htmlFor="simulation">Simulation</label>
                        <input type="checkbox" name="genre" value="Horror " id="horror" />
                        <label htmlFor="horror">Horror</label>
                        <input type="checkbox" name="genre" value="RPG " id="rpg" />
                        <label htmlFor="rpg">RPG</label>
                        <input type="checkbox" name="genre" value="Racing " id="racing" />
                        <label htmlFor="racing">Racing</label>

                        <input type="checkbox" name="genre" value="Real-Time Strategy " id="realtimestrategy" />
                        <label htmlFor="realtimestrategy">Real-Time Strategy</label>
                        <input type="checkbox" name="genre" value="Turn-Based Strategy" id="turnbasedstrategy" />
                        <label htmlFor="turnbasedstrategy">Turn-Based Strategy</label>
                    </fieldset>
                    <div id="recommenddiv">
                        <input value={formData.recommended} type="checkbox" name="recommended" onChange={handleFormData} />
                        <label htmlFor="recommended">Recommended?</label>
                    </div>
                </div>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}
