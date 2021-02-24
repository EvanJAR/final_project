import Room from "../components/roomComponents/Room";
import {useState, useEffect} from 'react';
import NavBar from './NavBar'
import RoomForm from "../components/roomComponents/RoomForm";
import {Container, Segment, Divider} from 'semantic-ui-react';

function HouseContainer({house}){

  const [rooms, setRooms] = useState([]);

  const getRoomsFromHouse = () => {
    fetch(`http://localhost:8080/houses/${house.id}/rooms`)
    .then(res => res.json())
    .then(data => {
      setRooms(data);
    }
  )};

  const createNewRoom = (roomName, roomType) => {
    fetch(`http://localhost:8080/houses/${house.id}/rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': roomName,
        'roomType': roomType,
        'house': {
          'id': house.id
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      setRooms(data)})
  }

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
  const [basketTotal, setBasketTotal] = useState(0);

  const getBasketItems = () => {
    fetch(`http://localhost:8080/houses/${house.id}/basket/items`)
    .then(res => res.json())
    .then(data => {
        setBasketItems(data);
    });
  };

  const addItemToBasket = (item) => {
    fetch(`http://localhost:8080/houses/${house.id}/basket/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": item.id,
        "name": item.name,
        "brand": item.brand,
        "price": item.price,
        "sourceURL": item.sourceURL,
        "room": {
          "id": item.room.id
        }
      }	)
    })
    .then(res => res.json())
    .then(data => {
      setBasketItems(data)
      getTotalBasketPrice();
    })
  };

  const deleteBasketItem = (item) => {
    fetch(`http://localhost:8080/houses/${house.id}/basket/${item.id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      setBasketItems(data);
      getTotalBasketPrice();
    });
  };

  const getTotalBasketPrice = () => {
    fetch(`http://localhost:8080/houses/${house.id}/basket/items/total`)
    .then(res => res.json())
    .then(data => {
        setBasketTotal(parseFloat(data).toFixed(2));
    });
  };

  useEffect(() => {
      getBasketItems();
      getTotalBasketPrice();
  }, []);

  const roomNodes = rooms.map(room => {
    return (
      <Segment>
        <Room basketItems={basketItems} deleteBasketItem={deleteBasketItem} addItemToBasket={addItemToBasket} deleteRoom={deleteRoom} house ={house} room={room} key={room.id}/>
      </Segment>
    )
  });

  return (
    <Container>
      <NavBar  basketTotal={basketTotal} deleteBasketItem={deleteBasketItem} basketItems={basketItems} house={house} key={house.id}/>
      <Divider/>
      {roomNodes}
      <Divider/>
      <RoomForm house={house} key={house.id} createNewRoom={createNewRoom}/>
    </Container>
  )
}

export default HouseContainer;