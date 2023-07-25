import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonList.css';

function PokemonList( { pokemons = [], details } ) {
  return (
    <div className='pokemon__container'>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} details={details}/>
      ))}
    </div>
  )
}

export default PokemonList;
