import React, { useState, useEffect } from 'react';
const PockemonContext = React.createContext();

function PockemonContextProvider(props) {
  const [pockemons, setPockemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPockemons();
  }, []);

  const getPockemons = () => {
    setLoading(true);
    fetch('/pokeapi/api/v2/pokemon?limit=20&offset=0')
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPockemons(response.results);
      })
      .catch((errors) => console.log(errors))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <PockemonContext.Provider value={{ pockemons, loading, getPockemons }}>
      {props.children}
    </PockemonContext.Provider>
  );
}

export { PockemonContextProvider, PockemonContext };
