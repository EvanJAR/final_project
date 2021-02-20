import NavBar from "../components/NavBar";
import RoomList from "../components/RoomList";

function House(){

  return (
    <>
      <NavBar></NavBar>
      <h1>Create a room</h1>
      <p>Form to create a room goes here</p>
      <RoomList/>
    </>
  )
}

export default House;