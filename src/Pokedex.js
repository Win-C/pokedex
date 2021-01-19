import Pokecard from './Pokecard';
import './Pokecard.css';

const BASE_IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

/** Renders a sequence of Pokecard components
 *  Takes in an array of objects describing different pokemon
 *  
 *  Example: pokemon = [{id: 4, name: 'Charmander', type: 'fire', base_experience: 62}, ...]
*/

function Pokedex({pokemon, totalExp, isWinner}){
  
  
  return (
    <div className="Pokedex">
      <h4 className="Pokedex-title">Your Pokemon</h4>
      <div className="Pokedex-cards">{ pokemon.map(({ name, id, type, base_experience }) =>
        <Pokecard
          name = { name }
          image = { BASE_IMAGE_URL+id+'.png' } // Comment: can also use template string
          type = { type }
          baseExp = { base_experience }
        />)}
        </div>
      <h3>Total Experience: {totalExp}</h3>
      <h3>{ isWinner ? "THIS HAND WINS!" : null}</h3>

    </div>
  );
}

export default Pokedex; 