import Pokecard from "./Pokecard";

function Pokedex({ pokemonList, isWinner, score }) {
  return (
    <div className="row align-items-center">
      <h1>Pokedex</h1>
      {pokemonList.map((p) => {
        return <Pokecard
          id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience} />
      })}
      <h3>Score: {score}</h3>
      {isWinner ? <h1>THIS HAND WINS!</h1> : null}
    </div>
  );
}

export default Pokedex;