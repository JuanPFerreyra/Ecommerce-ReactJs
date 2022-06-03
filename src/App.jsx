
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cuerpo from './components/Cuerpo/Cuerpo';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>

    <NavBar/>
    <ItemListContainer titulo='Bienvenidos a la tienda de ropa más variada' subTitulo='Próximamente...'/>
    <Cuerpo/>

    </>
  );
}

export default App;
