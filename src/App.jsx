import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Cart } from './Pages/Cart/Cart';
import { Catalog } from './Pages/Catalog/Catalog';
import { Reviews } from './Pages/Reviews/Reviews';
import { store } from './store'


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={<Catalog />}/>
            <Route path='/book/:id' element={<Reviews />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
