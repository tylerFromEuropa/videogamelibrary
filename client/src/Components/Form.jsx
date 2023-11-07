import { useState } from "react";
import axios from "axios";

export default function Form({ setGames, games }) {
  const [allGenre, setAllGenre] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    year: 0,
    developer: "",
    publisher: "",
    ign_rating: 0,
    description: "",
    genre: [],
    recommended: "",
    cover_url: "",
  });

  function handleFormData(e) {
    if (e.target.name === "genre") {
      setAllGenre([...allGenre, e.target.value]);
      setFormData({ ...formData, genre: allGenre });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }

  async function submitForm(event) {
    event.preventDefault();
    console.log(formData);
    const API = "http://localhost:8080/games";
    const res = await axios.post(API, formData);
    setGames([...games, res.data]);
  }

  return (
    <form onSubmit={submitForm}>
      <input
        required
        name="title"
        placeholder="Title"
        onChange={handleFormData}
      />
      <input
        type="number"
        name="year"
        placeholder="Year"
        onChange={handleFormData}
      />
      <input
        name="developer"
        placeholder="Developer"
        onChange={handleFormData}
      />
      <input
        name="publisher"
        placeholder="Publisher"
        onChange={handleFormData}
      />
      <input
        type="number"
        name="ign_rating"
        placeholder="Rating"
        onChange={handleFormData}
      />
      <input
        name="description"
        placeholder="Description"
        onChange={handleFormData}
      />
      <input
        name="cover_url"
        placeholder="Cover URL"
        onChange={handleFormData}
      />
      <fieldset onChange={handleFormData} name="genre" required>
        <input type="checkbox" name="genre" value="Action " id="action" />
        <label htmlFor="action">Action</label>
        <input type="checkbox" name="genre" value="Adventure " id="adventure" />
        <label htmlFor="adventure">Adventure</label>
        <input
          type="checkbox"
          name="genre"
          value="Simulation "
          id="simulation"
        />
        <label htmlFor="simulation">Simulation</label>
        <input type="checkbox" name="genre" value="Horror " id="horror" />
        <label htmlFor="horror">Horror</label>
        <input type="checkbox" name="genre" value="RPG " id="rpg" />
        <label htmlFor="rpg">RPG</label>
        <input type="checkbox" name="genre" value="Racing " id="racing" />
        <label htmlFor="racing">Racing</label>

        <input
          type="checkbox"
          name="genre"
          value="Real-Time Strategy "
          id="realtimestrategy"
        />
        <label htmlFor="realtimestrategy">Real-Time Strategy</label>
        <input
          type="checkbox"
          name="genre"
          value="Turn-Based Strategy"
          id="turnbasedstrategy"
        />
        <label htmlFor="turnbasedstrategy">Turn-Based Strategy</label>
      </fieldset>
      <div id="recommenddiv">
        <input type="checkbox" name="recommended" onChange={handleFormData} />
        <label htmlFor="recommended">Recommended</label>
      </div>

      <button>Submit</button>
    </form>
  );
}
