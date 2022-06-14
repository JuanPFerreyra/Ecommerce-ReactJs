
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cuerpo from './components/Cuerpo/Cuerpo';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <>

    <NavBar/>
    <ItemListContainer titulo='Bienvenidos a la tienda de ropa más variada'/>
   {/*  <ItemCount stock="5"/> */}
    <Cuerpo/>

    </>
  );
}

export default App;
