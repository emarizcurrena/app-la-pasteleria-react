import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Modal from './Components/Modal/Modal'
import { useState, useEffect, token } from 'react';
import ItemListContainer from './Components/ItemListContainer'
import Home from './pages/Home';
import Products from './pages/Productos';
import NotFound from './pages/NotFound';
import Detalle from './pages/Detalle';
import ProductList from './pages/ProductList';

function App() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        token,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log('Respuesta: ', res)
      })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/contact' element={<h1>CONTACTO</h1>} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/product/:id' element={<Detalle />} />
          <Route path='/' element={<Home />} />
          {/* <Route path='/products' element={<Products />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
