

function Item({item, key}){

  return(
    <>
      <h2>Item object</h2>
      <p>{item.name}</p>
      <p>{item.brand}</p>
      <p>{item.price}</p>
    </>
  )
}

export default Item;