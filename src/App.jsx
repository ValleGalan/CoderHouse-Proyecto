import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    //para poder llamar al navbar
    <> 
    <Navbar />
    <ItemListContainer prop={"texto temporal"}/> 
     </>
  );
}

export default App;
