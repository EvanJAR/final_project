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

  useEffect(() => {
    getRoomsFromHouse();
  }, [rooms]);

  const roomNodes = rooms.map(room => {
    return (
      <>
        <Room room={room} key={room.id}/>
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