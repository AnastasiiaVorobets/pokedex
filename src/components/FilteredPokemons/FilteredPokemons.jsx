import React from 'react';

const FilteredPokemons = ({ selectedType, filterByType }) => {
  const types = [
    'fire', 'grass', 'ice', 'water', 'electric',  'fighting',
    'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost',
    'dragon', 'dark', 'steel', 'fairy', 'normal'
  ];

  const handleFilterByType = (event) => {
    filterByType(event.target.value)
  }

  return (
    <div>
      <label>
        Filter by Type:
        <br />
        <select value={selectedType} onChange={handleFilterByType}>
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}> {type}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default FilteredPokemons;
