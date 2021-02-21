import NavBar from "../components/NavBar";
import RoomList from "../components/roomComponents/RoomList";
import RoomForm from "../components/roomComponents/RoomForm";

function Home(){

  return (
    <>
      <NavBar></NavBar>
      <div>
        <h2>Create a room</h2>
        <RoomForm/>
      </div>
      <RoomList/>
      {/* Here will be a list of room objects that belong to house id(1) */}
    </>
  )
}

export default Home;