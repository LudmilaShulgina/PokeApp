import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokeGrid from './components/PokeGrid';
import Form from './components/Form';
import CustomLink from './components/CustomLink';

import { Layout } from 'antd';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <BrowserRouter>
          <Header>
            <Menu mode='horizontal' defaultSelectedKeys={['mail']}>
              <Menu.Item key='home' icon={<MailOutlined />}>
                <CustomLink to='/'>Home</CustomLink>
              </Menu.Item>
              <Menu.Item key='form' icon={<MailOutlined />}>
                <CustomLink to='/form/pickachy'>Form</CustomLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Routes>
            <Route
              exact
              path='/form/:name'
              element={<Form name={'pickachy'} pockemon={'Пикачу'} />}
            />
            <Route path='/' element={<PokeGrid />} />
          </Routes>
        </BrowserRouter>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
