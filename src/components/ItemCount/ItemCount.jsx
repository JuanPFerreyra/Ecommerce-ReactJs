import { useState } from "react";

function ItemCount({stock}) {
  const[inicial, setCount] = useState(1)
  
   function restar(){
    if (inicial > 1) {
      setCount(inicial - 1)
    } 
  }

  function sumar(){
    if (inicial < stock) {
      setCount(inicial + 1)
    } 
  }

  return (
    <>
        <h4>Remera "Amapola"</h4>
        <p>Quiero encargar {inicial} de este artículo</p>
        <button onClick={restar}> - </button>
        <button onClick={sumar}> + </button>
    </>
  )
}

export default ItemCount;