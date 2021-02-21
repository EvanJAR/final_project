import Item from "../itemComponents/Item";

function Room({room}){

  const itemNodes = () => {
    //Check to see if room has items
    if (room.items != null){
    //If room has items map ite items to item nodes and pass into item component
      room.items.map(item => {
        return (
          <Item item={item} itemId={item.id}/>
        )
      })
    } else {
      return null
    }
  }

  return(
    <>
      <h4>{room.name}</h4>
      <h5>{itemNodes}</h5>
    </>
  )
}

export default Room;