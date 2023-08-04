import React, { useEffect, useState, useCallback } from 'react';
import fetchData from './api/pokemons';
import Header from './components/Header/Header';
import FilteredPokemons from './components/FilteredPokemons/FilteredPokemons';
import PokemonList from './components/PokemonList/PokemonList';
import LoadMore from './components/LoadMore/LoadMore';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import Footer from './components/Footer/Footer';

function App() {
  const limit = 12;
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [details, setDetails] = useState();
  const [selectedType, setSelectedType] = useState('');

  const getPokemon = async (response) => {
    try {
      const pokemonData = await Promise.all(
        response.map(async (item) => {
          const result = await fetchData(item.url);
          return result;
        })
      );

      const filteredPokemons = selectedType
        ? pokemonData.filter((pokemon) =>
            pokemon.types.some((type) => type.type.name === selectedType)
          )
        : pokemonData;

      setPokemons((prevState) => {
        const newState = [...prevState, ...filteredPokemons];
        return newState;
      });
    } catch (error) {
      console.log('Error', error);
    }
  };

  useEffect(() => {
    const pokemonData = async () => {
      try {
        const resultFetch = await fetchData(`${url}?limit=${limit}&offset=${offset}`);
        getPokemon(resultFetch.results);
      } catch (error) {
        console.log('Error', error);
      }
    };

    pokemonData();
  }, [offset, selectedType]);

  const loadMore = useCallback(() => {
    setOffset((prevOffset) => prevOffset + limit);
    setDetails(null);
  }, []);

  const closeCard = useCallback(() => {
    if (details) {
      setDetails(null);
    }
  }, [details]);

  const filterByType = useCallback((type) => {
    setSelectedType(type);
    setPokemons([]);
    setOffset(0);
    setDetails(null);
  }, []);

  return (
    <div className="App">
      <Header />
      <FilteredPokemons selectedType={selectedType} filterByType={filterByType} />
      <PokemonList pokemons={pokemons} details={(pokemon) => setDetails(pokemon)} />
      <LoadMore loadMore={loadMore} />
      {details && <PokemonDetail details={details} closeCard={closeCard} />}
      <Footer />
    </div>
  );
}

export default App;
