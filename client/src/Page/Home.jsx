import Form from "../Components/Form";
import "../App.css";
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
