import Form from "../Components/Form";
import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Games from "../Components/Games";

export default function Home({ games, setGames, deleteGame }) {
  return (
    <>
      <Form setGames={setGames} games={games} deleteGame={deleteGame} />
      <div className="gameslist">
        <Games games={games} deleteGame={deleteGame} />
      </div>
    </>
  );
}
