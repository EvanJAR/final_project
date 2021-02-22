

function Item({item}){

  const deleteItem = () => {
    fetch(`http://localhost:8080/rooms/${item.room.id}/items/${item.id}`, {
      method: 'DELETE',
    })
    .then(res => console.log(res.status))
  }

  return(
    <>
      <p>{item.name}</p>
      <p>{item.brand}</p>
      <p>{item.price}</p>
      <button onClick={deleteItem}>Delete item</button>
    </>
  )
}

export default Item;