import Item from "../itemComponents/Item";
import {useState, useEffect} from 'react';

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
  }, []);

  const itemNodes = items.map(item => {
    return(
      <Item item={item} key={item.id}/>
    )
  })

  return(
    <>
      <h4>{room.name}</h4>
      <>{itemNodes}</>
    </>
  )
}

export default Room;