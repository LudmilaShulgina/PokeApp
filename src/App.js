import React from 'react';
import './App.css';
import PokeCard from './components/PokeCard';
import PokeGrid from './components/PokeGrid';
import pockemons from './mock/pockemons.json';
import { Col } from 'antd';

function App() {
  return (
    <div className='App'>
      <PokeGrid>
        {pockemons.results.map((item) => {
          return (
            <Col key={item.name} span={4}>
              <PokeCard name={item.name} url={item.url} />
            </Col>
          );
        })}
      </PokeGrid>
    </div>
  );
}

export default App;
