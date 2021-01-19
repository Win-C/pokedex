import './Pokecard.css';

/** Shows a single Pokemon, with their name, image, and type. */

function Pokecard({ name, image, type, baseExp}){
  return (
  <div className="Pokecard">
    <b className="Pokecard-name">{ name }</b>
    <br />
    <img src={ image } className="Pokecard-img" alt="pokemon" />
    <p className="Pokecard-description">Type: { type }</p>
    <p className="Pokecard-description">EXP: { baseExp }</p>
  </div>
  );
}

export default Pokecard;
