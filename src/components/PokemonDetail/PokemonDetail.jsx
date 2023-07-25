import { capitalizeName } from '../../helpers/capitalizeName';
import './PokemonDetail.css';

function PokemonDetail({ details, closeCard }) {
  const { name, id } = details;

  return (
    <>
    <div className="details">
      <button
        className='closeButton'
        onClick={closeCard}
      >
        Close Card
      </button>
      <p>Pokemon details:</p>
      {details && (
        <div className="details__info">
          <h2
            className='details__info-name'
          >
            {capitalizeName(name)}
          </h2>
          <img
            className="details__info-image"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={`${name}`}
          />
          <div className="abilities">
            <p className='abilities_title'>Abilities:</p>
            {details.abilities.map((ability) => {
              const {name} = ability.ability;
              return (
                <p key={name}>{name}</p>
              );
            })}
          </div>
          <div className="stats">
          <p className='stats_title'>Stats:</p>
            {details.stats.map((stat) => {
              const { name } = stat.stat;
              const {base_stat} = stat;
              return (
                <p key={name}>{name} : {base_stat}</p>
              );
            })}
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default PokemonDetail;
