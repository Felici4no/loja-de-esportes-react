// src/App.jsx
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
