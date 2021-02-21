

function Item({item}){

  return(
    <>
      <p>{item.name}</p>
      <p>{item.brand}</p>
      <p>{item.price}</p>
    </>
  )
}

export default Item;