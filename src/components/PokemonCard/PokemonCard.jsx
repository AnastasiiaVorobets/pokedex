import { capitalizeName } from '../../helpers/capitalizeName';
import './PokemonCard.css';

function PokemonCard({ pokemon, details }) {
  const { id, name } = pokemon;

  return (
    <div
      role="button"
      className="pokemon__block"
      key={id}
      onClick={() => details(pokemon)}
    >
      <div className='image-block'>
        <img
          className="pokemonImage"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={`${name}`}
        />
      </div>
      <h2 className="pokemonName">
        {capitalizeName(name)}
      </h2>
      <div>
        {pokemon.types.map((type) => {
          const { name: typeName } = type.type;
          return (
            <div
              className="pokemon__type"
              key={typeName}
            >
              {typeName}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonCard;
