import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Contexts/CartContexts";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({unicoProd}) => {
    const { addToCart } = useCartContext()
    const [button, setButton] = useState("button")

    const onAdd = (cont) => {
        setButton ("Boton dos")
        addToCart({...unicoProd, cantidad: cont})
    }

    return(
        <>
        <div>
            <div>
                {<img src={unicoProd.imagen} alt="Prendas" widht={170}/>}
            </div>
            nombre: {unicoProd.nombre}
            categoria: {unicoProd.categoria}
            precio: {unicoProd.precio}
        </div>
        <div>
            {
                button === "button" ?
                <ItemCount stock={5} onAdd={onAdd}/>
            :
                <div>
                    <div>
                        <Link to="/cart">
                            <button>Finalizar compra</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <button>Continuar comprando</button>
                        </Link>
                    </div>
                </div>
            }
        </div>
        </>

    )
}

export default ItemDetail;