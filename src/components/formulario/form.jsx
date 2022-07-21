import { useCartContext } from "../Contexts/CartContexts"
import { getFirestore, collection, addDoc } from "@firebase/firestore";

export const Formulario = () => {
    const {cart, precioTotal, vaciarCarrito} = useCartContext()
        
        function pedidoCompra(e) {
            e.preventDefault()
            let pedido = {}
    
            pedido.buyer = {names:"Juan", email:"abc@gmail.com", phone:"12345"}
            pedido.total = precioTotal()
            pedido.productos = cart.map (cartItem =>{
                const id = cartItem.id
                const nombre = cartItem.nombre
                const precio = cartItem.precio * cartItem.cantidad
                
                return {id, nombre, precio}
            })
    
            const db = getFirestore()
            const orderCollection = collection(db, 'productos')
            addDoc(orderCollection, pedido)
            .then(resp => (resp.id))
            .catch(err => console.log('ERROR EN PEDIDO: ', err))
            .finally(vaciarCarrito)
        }
    
        return (
            <div>
                <form onSubmit={pedidoCompra}>
                    <div>
                        <label>nombre</label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <label>mail</label>
                        <input type="email"></input>
                    </div>
                    <div>
                        <label>telefono</label>
                        <input type="tel"></input>
                    </div>
                </form>
                <button>Finalizar Compra</button>
            </div>
        )
}

export default Formulario