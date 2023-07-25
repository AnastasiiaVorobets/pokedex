import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import PokemonCard from './components/PokemonCard/PokemonCard';
import LoadMore from './components/LoadMore/LoadMore';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import Footer from './components/Footer/Footer';

function App() {
  const limit = 12;
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(limit);
  const [details, setDetails] = useState();

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getPokemon = async (response) => {
    try {
      const pokemonData = await Promise.all(
        response.map(async (item) => {
          const result = await fetchData(item.url);
          return result;
        })
      );

      setPokemons((prevState) => {
        const newState = [...prevState, ...pokemonData];
        return newState;
      });
    } catch (error) {
      console.log('Error', error)
    }
  };

  useEffect(() => {
    const pokemonData = async () => {
      try {
        setPokemons([]);
        const resultFetch = await fetchData(`${url}?limit=${count}`);
        getPokemon(resultFetch.results);
      } catch (error) {
        console.log('Error', error);
      }
    };

    pokemonData();
  }, [count]);

  const loadMore = () => {
    setCount((prevCount) => prevCount + 3);
    setDetails(null);
  };

  return (
    <div className="App">
      <Header />
      <PokemonCard pokemons={pokemons} details={pokemon => setDetails(pokemon)} />
      <LoadMore loadMore={loadMore} />
      {details && <PokemonDetail details={details} />}
      <Footer />
    </div>
  );
}

export default App;