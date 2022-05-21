import React from 'react';
import './App.css';
import PokeGrid from './components/PokeGrid';
import Form from './components/Form';

import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Form name={'Иван'} pockemon={'Пикачу'} />
        <PokeGrid choosenCard={-5} />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
