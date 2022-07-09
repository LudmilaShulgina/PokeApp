import React, { useState, useEffect } from 'react';
const WordsContext = React.createContext();

function WordsContextProvider(props) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    getWords();
  }, []);

  // ToDo get words
  const getWords = () => {
    setLoading(true);
    fetch('itgirlschool/api/words')
      .then((response) => response.json())
      .then((response) => {
        setWords(response.results);
      })
      .catch((errors) => setError(errors))
      .finally(() => {
        setLoading(false);
      });
  };

  //ToDo edit words
  const editWords = (word) => {
    fetch(`itgirlschool/api/words/${word.id}/update`, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(word), // данные могут быть 'строкой' или {объектом}!
    })
      .then(() => {
        getWords();
      })
      .catch((errors) => setError(errors));
  };

  const deleteWords = (word) => {
    fetch(`itgirlschool/api/words/${word.id}/delete`, {
      method: 'POST', // или 'PUT'
    })
      .then(() => {
        getWords();
      })
      .catch((errors) => setError(errors));
  };

  return (
    <WordsContext.Provider
      value={{ words, loading, error, editWords, deleteWords }}
    >
      {props.children}
    </WordsContext.Provider>
  );
}

export { WordsContextProvider, WordsContext };
