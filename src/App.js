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
import { CartProvider } from './context/CartContext'
import Cart from './pages/Cart'
import Eventos from './pages/Eventos'
import Nosotros from './pages/Nosotros'
import Footer from './Components/Footer/Footer'

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
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div style={{ marginBottom: "80px" }}>
            <Routes>
              <Route path='/contact' element={<h1>CONTACTO</h1>} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/products' element={<ProductList />} />
              <Route path='/products/:category' element={<ProductList />} />
              <Route path='/product/:id' element={<Detalle />} />
              <Route path='/' element={<Home />} />
              {/* <Route path='/products' element={<Products />} /> */}
              <Route path='*' element={<NotFound />} />
              <Route path='/Nosotros' element={<Nosotros />} />
              <Route path='/Eventos' element={<Eventos />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
