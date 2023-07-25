import './PokemonDetail.css';

function PokemonDetail({ details }) {
  return (
    <>
    <div className="details">
      <h3>Pokemon details:</h3>
      {details && (
        <div className="details__info">
          <h2
            className='details__info-name'
          >
            {details.name.charAt(0).toUpperCase() + details.name.slice(1)}
          </h2>
          <img
            className="details__info-image"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${details.id}.svg`}
            alt={`${details.name}`}
          />
          <div className="abilities">
            <p className='abilities_title'>Abilities:</p>
            {details.abilities.map((ability) => {
              return (
                <p>{ability.ability.name}</p>
              );
            })}
          </div>
          <div className="stats">
          <p className='stats_title'>Stats:</p>
            {details.stats.map((stat) => {
              return (
                <>
                  <p>
                    {stat.stat.name} :
                    {stat.base_stat}
                  </p>
                </>
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
