export default function Game({ games }) {
  return games.map((game) => {
    return (
      <div key={game._id}>
        <h2>{game.title}</h2>
        <img className="gamecover" src={game.cover_url} alt={game.title} />
        <p>{game.description}</p>
        <p>Year: {game.year}</p>
        <p>Genre: {game.genre}</p>
        <p>Rating: {game.ign_rating}</p>
      </div>
    );
  });
}
