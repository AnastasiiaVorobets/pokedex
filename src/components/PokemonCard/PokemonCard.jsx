//import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonCard.css';

function PokemonCard( { pokemons = [], details } ) {
  return (
    <>
    <div className='pokemon__container'>
      {pokemons.map(pokemon => {
          return (
            <div
              role="button"
              className="pokemon__block"
              key={pokemon.id}
              onClick={() => details(pokemon)}

            >
              <div className='image-block'>
              <img 
                className="pokemonImage"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                alt={`${pokemon.name}`} 
              />
              </div>
              <h2 className="pokemonName">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
              <div className="poke-type-conteiner">
                {pokemon.types.map((type) => {
                  return (
                    <div
                      className="poke-type"
                      key={pokemon.id}
                    >
                      {type.type.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      }
      </div>
    </>
  )
}

export default PokemonCard;