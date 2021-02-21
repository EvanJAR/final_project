import Room from "../components/roomComponents/Room";
import {useState, useEffect} from 'react';

function House({house}){

  const [rooms, setRooms] = useState([]);

  const getRoomsFromHouse = () => {
    fetch(`http://localhost:8080/houses/${house.id}/rooms`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setRooms(data);
    }
    )};

  useEffect(() => {
    getRoomsFromHouse();
  }, []);

  const roomNodes = rooms.map(room => {
    return (
      <Room room={room} key={room.id}/>
    )
  })

  return (
    <>
      <h3>{house.houseName}</h3>
      <div>{roomNodes}</div>
    </>
  )
}

export default House;