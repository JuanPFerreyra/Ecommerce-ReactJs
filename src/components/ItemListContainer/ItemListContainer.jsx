import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { getFirestore, query, where, collection, getDocs } from "@firebase/firestore";

const ItemListContainer = ({titulo, subTitulo}) => {
  const[productos, setProductos] = useState([])
  const[loading, setLoading] = useState(true)

  const { categoryId } = useParams();
  
  useEffect(()=>{
    const db = getFirestore()
        const queryCollection = collection (db, 'orders')
        const queryCollectionFilter = categoryId ? query (queryCollection, where('categoria','==', categoryId)) : queryCollection
         
        getDocs(queryCollectionFilter)
        .then(resp => setProductos(resp.docs.map(item => ({id: item.id, ...item.data()}))))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
  }, [categoryId])

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