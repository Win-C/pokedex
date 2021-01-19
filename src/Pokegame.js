import Pokedex from "./Pokedex";

/* 
Take your list of 8 pokemon and randomly assign 
them into two hands of 4 cards each. 
It should then render two Pokedex components, one for each hand. 
*/
function Pokegame({ pokemon }) {
  const { hand1, hand2 } = createHands(pokemon);

  const hand1Exp = getTotalExp(hand1);
  const hand2Exp = getTotalExp(hand2);

  return (
    <div className="Pokegame">
      <div className="Pokegame-ash">
        <h2>Ash</h2>
        <Pokedex pokemon={hand1} totalExp={hand1Exp} isWinner={hand1Exp > hand2Exp}/>
      </div>
      <div className="Pokegame-brock">
        <h2>Brock</h2>
        <Pokedex pokemon={hand2} totalExp={hand2Exp} isWinner={hand1Exp < hand2Exp}/>
      </div>
    </div>
  );
}

/* Takes a list of pokemon and returns an object with two hands
Each hand is equal size and made up of random pokemon from the list.

Returns { hand1: [{id: 4, name: 'Charmander', type: 'fire', base_experience: 62}, ... ], 
          hand2: [{id: 7, name: 'Squirtle', type: 'water', base_experience: 63}, ...] }
*/
function createHands(pokemon) {
  let hand1 = [...pokemon];
  let hand2 = [];

  for (let i = 0; i < (pokemon.length / 2); i++) {
    let randomIdx = Math.floor(Math.random * hand1.length);

    let randomPokemon = hand1.splice(randomIdx, 1);
    hand2.push(randomPokemon[0]);
  }

  return { hand1, hand2 };
}


function getTotalExp(hand) {
  return hand.reduce((sum, {base_experience}) => sum + base_experience, 0);
}


Pokegame.defaultProps = {
  pokemon:
  [
    {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
    {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
    {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
    {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
    {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
    {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
    {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
    {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
  ]
};

export default Pokegame;