import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import Home from './pages/Home';
import Filme from './pages/Filmes';
import Header from './components/Header';
import Erro from './pages/Erro';
import Favoritos from './pages/Favoritos';

const RoutesPages = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path='/favoritos' element={<Favoritos />}/>

        <Route path='*' element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPages;
