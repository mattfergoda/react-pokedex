const BASE_POKEMON_IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

function Pokecard({ id, name, type, base_experience }) {
  const imgUrl = BASE_POKEMON_IMG_URL + `${id}.png` ;

  return (
    <div className="card text-white bg-secondary mb-3 col-2 mx-3">
      <h5>{ name }</h5>
      <img src={ imgUrl }/>
      <p>Type: { type }</p>
      <p>EXP: { base_experience }</p>
    </div>
  );
}

export default Pokecard;