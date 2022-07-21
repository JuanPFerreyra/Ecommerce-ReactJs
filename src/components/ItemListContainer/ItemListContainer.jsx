import { useEffect, useState } from "react"
import { getFetch } from "../../helpers/getFetch"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({titulo, subTitulo}) => {
  const[productos, setProductos] = useState([])
  const[loading, setLoading] = useState(true)
  
  useEffect(()=>{
    getFetch()
    .then((resp)=>{setProductos(resp)})
    .catch((err) =>console.log(err))
    .finally(()=>setLoading(false))
  }, [])

  console.log(productos)
  
  return (
    <>
    
      <h1>{titulo}</h1>
      <p>{subTitulo}</p>
      
      {loading ?
        <h3>Cargando...</h3>
      :
        <ItemList productos={productos}/>
      }
      
    </>
  )
}

export default ItemListContainer