import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Modal from './Components/Modal/Modal'
import { useState } from 'react';
import CardListContainer from './Components/CardListContainer/CardListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [open, setOpen] = useState(false)
  const [tipoProducto, setTipoProducto] = useState("Tortas")
  const handleClose = () => {
    setOpen(false)
  }

  const onTypeChange = (type) => {
    setTipoProducto(type);
  }

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users', {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       token,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((res) => {
  //       console.log('Respuesta: ', res)
  //     })
  // }, [])

  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      {/* <button onClick={() => { onTypeChange("Tortas") }}>Tortas</button>
      <button onClick={() => { onTypeChange("Alfajores") }}>Alfajores</button>
      <div className='general-container'>
        <CardListContainer type={tipoProducto} />
        <h1>La Pasteleria</h1>
        <ItemListContainer greeting={'211223344'} />
      </div>
      <button onClick={() => setOpen(true)}>Abrir modal</button>
      <Modal handleClose={handleClose} open={open}>
        <h2>Contacto</h2>
        <form>
          <input type={'text'} placeholder={'nombre'} />
          <input type={'text'} placeholder={'apellido'} />
          <button>Enviar</button>
        </form>
      </Modal> */}
    </div>
  );
}

export default App;
