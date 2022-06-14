import ItemList from "../ItemList/ItemList"

function ItemListContainer({titulo, subTitulo}) {
  return (
    <>
    
      <h1>{titulo}</h1>
      <p>{subTitulo}</p>
      <ItemList/>

    </>
  )
}

export default ItemListContainer