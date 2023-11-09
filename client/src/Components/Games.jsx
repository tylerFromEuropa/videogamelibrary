import { Link } from "react-router-dom";

export default function Games({ games, deleteGame }) {
  const reversedGames = games.toReversed();
  console.log(reversedGames);

  return reversedGames.map((game) => {
    return (
      <div key={game._id} className="game">
        <Link to={`/game/${game._id}`}>
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
        </Link>
        <p>{game.description}</p>
        <p>Year: {game.year}</p>
        <p>Genre: {game.genre}</p>
        <p>Rating: {game.ign_rating}</p>
        <button onClick={() => deleteGame(game._id)}>
          This game can go in the bin!
        </button>
      </div>
    );
  });
}
