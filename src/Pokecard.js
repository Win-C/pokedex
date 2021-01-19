import './Pokecard.css';

/** Shows a single Pokemon, with their name, image, type and base experience. */

function Pokecard({ name, image, type, baseExp}){
  return (
  <div className="Pokecard">
    <h3 className="Pokecard-name">{ name }</h3>
    <img src={ image } className="Pokecard-img" alt={`image of ${name}`}/>
    <p className="Pokecard-description">Type: { type }</p>
    <p className="Pokecard-description">EXP: { baseExp }</p>
  </div>
  );
}

export default Pokecard;
