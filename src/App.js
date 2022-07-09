import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokeGrid from './components/PokeGrid';
import Form from './components/Form';
import CustomLink from './components/CustomLink';
import { PockemonContextProvider } from './context/pockemonContext';
import { WordsContextProvider } from './context/wordsContext';

import { Layout } from 'antd';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <PockemonContextProvider>
      <WordsContextProvider>
        <Layout>
          <Content>
            <BrowserRouter>
              <Header>
                <Menu mode='horizontal' defaultSelectedKeys={['mail']}>
                  <Menu.Item key='home' icon={<MailOutlined />}>
                    <CustomLink to='/'>Home</CustomLink>
                  </Menu.Item>
                  <Menu.Item key='form' icon={<MailOutlined />}>
                    <CustomLink to='/form'>Form</CustomLink>
                  </Menu.Item>
                </Menu>
              </Header>
              <Routes>
                <Route
                  exact
                  path='/form'
                  element={
                    <Form name={'pickachy'} pockemon={'Пикачу'} index={5} />
                  }
                />
                <Route path='/' element={<PokeGrid />} />
              </Routes>
            </BrowserRouter>
          </Content>
          <Footer />
        </Layout>
      </WordsContextProvider>
    </PockemonContextProvider>
  );
}

export default App;
