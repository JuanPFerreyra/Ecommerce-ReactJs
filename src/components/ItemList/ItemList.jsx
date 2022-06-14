import { useEffect, useState } from "react"
import { getFetch, Item } from "../Item/Item"

const ItemList = ()=>{
    const[productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)
    
    useEffect(()=>{
        getFetch()
        .then((resp)=>{setProductos(resp)})
        .catch((err) =>console.log(err))
        .finally(()=>setLoading(false))
    }, [])

    console.log(productos)

    return(
        <div>
            {loading ?
                <h3>Cargando...</h3>
            :
                <Item/>
            }
        </div>
    )
    
}

export default ItemList