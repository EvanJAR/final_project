

function Item({house, item, deleteItem}){

  const addItemToBasket = () => {
    console.log(house.id);
    fetch(`http://localhost:8080/houses/${house.id}/basket/items/${item.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'itemId': item.id
      })
    })
    .then(res => console.log(res.status))
  };

  return(
    <>
      <p>{item.name}</p>
      <p>{item.brand}</p>
      <p>{item.price}</p>
      <button onClick={addItemToBasket}>Add to basket</button>
      <button onClick={() => deleteItem(item)}>Delete item</button>
    </>
  )
}

export default Item;