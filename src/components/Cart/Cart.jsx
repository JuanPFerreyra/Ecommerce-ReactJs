import { useCartContext } from "../Contexts/CartContexts";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, vaciarCarrito, precioTotal} = useCartContext()

    return (
        <div>
            <ul>
                {
                    cart.map(item =>
                        <li key={item.id}>
                            <div>
                                <img src={item.imagen} alt={item.nombre} height={160}/>
                            </div>
                            <div>
                                <h5>{item.nombre}</h5>
                                <p>Unidad: $ {item.precio}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Total de prenda: ${item.precio * item.cantidad}</p>
                            </div>
                            <button key={item.id} onClick={()=>eliminarItem(item.id)}>X</button>
                        </li>)
                }
            </ul>
            <div className="text-center">
                <h4>Compra total: ${precioTotal()}</h4>
                <button onClick={vaciarCarrito} className="btn btn-secondary mx-3 my-3">Vaciar Carrito</button>
                <Link to="/Form" >
                    <button className="btn btn-secondary mx-3 my-3">Continuar comprando</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart;