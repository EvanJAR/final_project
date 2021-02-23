import Room from "../components/roomComponents/Room";
import {useState, useEffect} from 'react';
import NavBar from '../components/NavBar'
import RoomForm from "../components/roomComponents/RoomForm";

function HouseContainer({house}){

  const [rooms, setRooms] = useState([]);

  const getRoomsFromHouse = () => {
    fetch(`http://localhost:8080/houses/${house.id}/rooms`)
    .then(res => res.json())
    .then(data => {
      setRooms(data);
    }
  )};

  const deleteRoom = (room) => {
    fetch(`http://localhost:8080/houses/${room.house.id}/rooms/${room.id}`, {
      method: 'DELETE',
    })
    .then(data => {
      const newRooms = rooms.filter(oldRoom => {
        return room.id !== oldRoom.id
      })
      setRooms(newRooms);
    })
  }

  useEffect(() => {
    getRoomsFromHouse();
  }, []);

  const [basketItems, setBasketItems] = useState([]);

  const getBasketItems = () => {
    fetch(`http://localhost:8080/houses/${house.id}/basket/items`)
    .then(res => res.json())
    .then(data => {
        setBasketItems(data);
    });
  };

  const addItemToBasket = (item) => {
    console.log(basketItems);
    fetch(`http://localhost:8080/houses/${house.id}/basket/items/${item.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data => setBasketItems([...basketItems, data]))
    console.log(basketItems);
  };

  const deleteBasketItem = (item) => {
    fetch(`http://localhost:8080/houses/${house.id}/basket/${item.id}`, {
        method: 'DELETE',
    })
    .then(data => {
        const newBasketItems = basketItems.filter(oldItem => {
            return item.id !== oldItem.id
        })
        console.log("New basket items:" + newBasketItems);
        console.log("Basket items before set:" + basketItems);
        setBasketItems(newBasketItems);
        console.log("Basket items after set:" + basketItems);
    });
  };

  useEffect(() => {
      getBasketItems();
  }, []);

  const roomNodes = rooms.map(room => {
    return (
      <Room addItemToBasket={addItemToBasket} deleteRoom={deleteRoom} house ={house} room={room} key={room.id}/>
    )
  });

  return (
    <>
    <div>
      <NavBar deleteBasketItem={deleteBasketItem} basketItems={basketItems} house={house} key={house.id}/>
    </div>
    <div>
      {roomNodes}
    </div>
    <RoomForm house={house} key={house.id}/>
    </>
  )
}

export default HouseContainer;