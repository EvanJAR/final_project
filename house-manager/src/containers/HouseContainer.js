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

  const roomNodes = rooms.map(room => {
    return (
      <>
        <Room deleteRoom={deleteRoom} house ={house} room={room} key={room.id}/>
      </>
    )
  });

  return (
    <>
    <div>
      <NavBar house={house} key={house.id}/>
    </div>
    <div>
      {roomNodes}
    </div>
    <RoomForm house={house} key={house.id}/>
    </>
  )
}

export default HouseContainer;