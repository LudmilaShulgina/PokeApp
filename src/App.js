import React from 'react';
import './App.css';
import PokeCard from './components/PokeCard';
import PokeGrid from './components/PokeGrid';
import Form from './components/Form';
import pockemons from './mock/pockemons.json';
import { Col, Layout } from 'antd';
import * as classnames from 'classnames';
import styles from './assets/styles/modules/card.module.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Form />
        <PokeGrid>
          {pockemons.results.map((item, index) => {
            return (
              <Col key={item.name} span={4}>
                <PokeCard
                  tag={'yellow'}
                  name={index + item.name}
                  url={item.url}
                  className={classnames('grid', {
                    [styles.yellow]: index % 2 === 0,
                    [styles.green]: !(index % 2 === 0),
                  })}
                />
              </Col>
            );
          })}
        </PokeGrid>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
