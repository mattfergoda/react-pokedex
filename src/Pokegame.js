import Pokedex from "./Pokedex";
import POKEMON_LIST from "./pokemonList";
import { choice } from "./helpers";

const HAND_SIZE = 4;

function Pokegame({ pokemonList = POKEMON_LIST }) {
  const hand1 = getRandomHand(pokemonList, HAND_SIZE);
  const hand2 = getRandomHand(pokemonList, HAND_SIZE);

  const result = playGame(hand1, hand2);

  const user1 = {
    hand: hand1,
    outcome: result.hand1.outcome,
    score: result.hand1.score
  };
  const user2 = {
    hand: hand2,
    outcome: result.hand2.outcome,
    score: result.hand2.score
  };

  console.log("user1", user1);

  return (
    <div>
      <Pokedex
        key="1"
        pokemonList={user1.hand}
        isWinner={user1.outcome}
        score={user1.score} />
      <Pokedex
        key="2"
        pokemonList={user2.hand}
        isWinner={user2.outcome}
        score={user2.score} />
    </div>
  );
}

function getRandomHand(pokemonList, handSize) {
  const hand = [];
  for (let i = 0; i < handSize; i++) {
    hand.push(choice(pokemonList));
  }
  return hand;
}

function playGame(hand1, hand2) {
  const score1 = hand1.reduce((score, pokemon) => {
    return score + pokemon.base_experience},0);
  const score2 = hand2.reduce((score, pokemon) => {
    return score + pokemon.base_experience}, 0);

  return {
    hand1: {
      outcome: (score1 > score2),
      score: score1
    },
    hand2: {
      outcome: (score2 > score1),
      score: score2
    }
  }
};

export default Pokegame;