import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import global from './global.scss';
import styles from './app.module.scss'

import { Header } from './components/Header';
import { Contato } from './components/Contato';
import { Produtos } from './components/Produtos';
import { Produto } from './components/Produto';




const App = () => {
  return (
    
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
