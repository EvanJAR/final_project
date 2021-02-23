import Item from "../itemComponents/Item";
import {useState, useEffect} from 'react';
import ItemForm from "../itemComponents/ItemForm";

function Room({house, room, deleteRoom}){

  const [items, setItems] = useState([]);

  const getItemsFromRoom = () => {
    fetch(`http://localhost:8080/rooms/${room.id}/items`)
    .then(res => res.json())
    .then(data => {
      setItems(data);
    }
    )};

  const createNewItem = (item) => {
    fetch(`http://localhost:8080/rooms/${room.id}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data => setItems([...items, data]))
  };

  const deleteItem = (item) => {
    fetch(`http://localhost:8080/rooms/${item.room.id}/items/${item.id}`, {
      method: 'DELETE',
    })
    .then(data => {
      const newItems = items.filter(oldItem => {
        return item.id !== oldItem.id
      })
      setItems(newItems);
    })
  };

  useEffect(() => {
    getItemsFromRoom();
  }, []);

  const itemNodes = items.map(item => {
    return(
      <Item deleteItem={deleteItem} house={house} item={item} key={item.id}/>
    )
  })

  return(
    <>
      <h4>{room.name}</h4>
      <button onClick={ () => deleteRoom(room)}>Delete room</button>
      <>{itemNodes}</>
      <ItemForm createNewItem={createNewItem} room={room}/>
    </>
  )
}

export default Room;