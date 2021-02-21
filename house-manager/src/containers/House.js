import Room from "../components/roomComponents/Room";

function House({house}){

  const roomNodes = house.rooms.map(room => {
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