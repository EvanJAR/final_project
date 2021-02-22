import Item from "../itemComponents/Item";
import {useState, useEffect} from 'react';
import ItemForm from "../itemComponents/ItemForm";

function Room({room}){

  const [items, setItems] = useState([]);

  const getItemsFromRoom = () => {
    fetch(`http://localhost:8080/rooms/${room.id}/items`)
    .then(res => res.json())
    .then(data => {
      setItems(data);
    }
    )};

  useEffect(() => {
    getItemsFromRoom();
  }, [items]);

  const deleteRoom = () => {
    fetch(`http://localhost:8080/houses/${room.house.id}/rooms/${room.id}`, {
      method: 'DELETE',
    })
    .then(res => console.log(res.status))
  }

  const itemNodes = items.map(item => {
    return(
      <Item item={item} key={item.id}/>
    )
  })

  return(
    <>
      <h4>{room.name}</h4>
      <button onClick={deleteRoom}>Delete room</button>
      <>{itemNodes}</>
      <ItemForm room={room}/>
    </>
  )
}

export default Room;