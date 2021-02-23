

function Item({item, deleteItem, addItemToBasket}){

  return(
    <>
      <p>{item.name}</p>
      <p>{item.brand}</p>
      <p>{item.price}</p>
      <button onClick={() => addItemToBasket(item)}>Add to basket</button>
      <button onClick={() => deleteItem(item)}>Delete item</button>
    </>
  )
}

export default Item;