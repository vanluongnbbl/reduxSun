import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProduct } from './redux';
import './App.css';
import Header from './components/header/Header';
import Product from './components/Product/Product';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])

  return (

    <div className="App">
      <Header />
      <Sidebar />
      <Product />
    </div>
  );
}

export default App;
