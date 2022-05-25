import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import CardList from './Components/CardList/CardList';
import Modal from './Components/Modal/Modal'
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <NavBar />
      <div className='general-container'>
        <CardList title={'Tortas'} />
        <CardList title={'Alfajores'} />
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
      </Modal>
    </div>
  );
}

export default App;
