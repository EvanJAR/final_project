import Room from "../components/roomComponents/Room";
import {useState, useEffect} from 'react';
import NavBar from '../components/NavBar'

function HouseContainer({house}){

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
    <div>
      <NavBar house={house}/>
    </div>
    <div>
      {roomNodes}
    </div>
    </>
  )
}

export default HouseContainer;