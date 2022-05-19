import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>La Pasteleria</h1>
      <ItemListContainer greeting={'211223344'} />
    </div>
  );
}

export default App;
