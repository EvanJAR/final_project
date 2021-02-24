import Item from "../itemComponents/Item";
import {useState, useEffect} from 'react';
import ItemForm from "../itemComponents/ItemForm";
import { Header, Icon, Message } from "semantic-ui-react";

function Room({house, room, addItemToBasket, deleteRoom, deleteBasketItem}){

  const [items, setItems] = useState([]);

  const getItemsFromRoom = () => {
    fetch(`http://localhost:8080/rooms/${room.id}/items`)
    .then(res => res.json())
    .then(data => {
      setItems(data);
    })
  };

  const createNewItem = (item) => {
    fetch(`http://localhost:8080/rooms/${room.id}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data => setItems(data))
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
      <Item addItemToBasket={addItemToBasket} deleteItem={deleteItem} house={house} item={item} key={item.id}/>
    )
  });

  return(
    <>
    <div style={{display: 'flex', flexDirection: 'flow', alignItems: 'start'}}>
      <Header>{room.name}</Header>
      <Icon name='remove' onClick={ () => deleteRoom(room)} style={{marginLeft: '15px'}}/>
    </div>
      <>{itemNodes}</>
      <ItemForm createNewItem={createNewItem} room={room}/>
    </>
  )
}

export default Room;