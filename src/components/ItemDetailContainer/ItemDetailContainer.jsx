import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const[productos, setUnicoProd] = useState([])
    const[loading, setLoading] = useState(true)

    const {id} = useParams();
    
    useEffect(()=>{
        const db = getFirestore()
        const queryItem = doc(db, 'productos', id)

        getDoc(queryItem)
        .then((resp)=> setUnicoProd({id: resp.id, ...resp.data()}))
        .catch((err) =>console.log(err))
        .finally(()=>setLoading(false))
      }, [id])

  return (
    <>
        {loading ?
            <h3>En un instante se mostrara el producto...</h3>
        :
            <ItemDetail unicoProd={productos}/>
        }
    </>
  )
}

export default ItemDetailContainer;