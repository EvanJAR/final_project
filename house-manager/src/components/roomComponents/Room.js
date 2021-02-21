import Item from "../itemComponents/Item";

function Room({room}){

  const itemNodes = room.items.map(item => {
    
    if (room.items != null){
      return (
        <Item item={item} itemId={item.id}/>
      )
    }

    else return null;
    
  })

  return(
    <>
      <h4>{room.name}</h4>
      <h5>{itemNodes}</h5>
    </>
  )
}

export default Room;