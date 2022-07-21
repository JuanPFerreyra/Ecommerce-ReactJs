import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './components/Contexts/CartContexts';
import Formulario from './components/formulario/form';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer titulo='Bienvenidos a la tienda de ropa más variada'/>}/>
            <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<Navigate to="/"/>}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/form' element={<Formulario/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
