

function BasketItem ({item, deleteBasketItem}) {

  return (
    <>
        <p>{item.name}, {item.brand} - {item.price}</p> 
        <button onClick={() => deleteBasketItem(item)}>Remove From Basket</button>
    </>
  )
}

export default BasketItem;