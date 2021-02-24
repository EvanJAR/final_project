import {useState} from 'react';

function RoomForm({house, createNewRoom}){

  const [newRoom, setNewRoom] = useState(null);
  const [roomType, setRoomType] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newRoom && roomType != null) {
      createNewRoom(newRoom, roomType);
    }
  };

  const handleRoomName = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setNewRoom(userInput);
  };

  const handleRoomTypeSelect = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setRoomType(userInput);
  };

  return(

    <>
      <h2>Create a room</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Enter room name" required onChange={handleRoomName} />
        </label>
        <select onChange={handleRoomTypeSelect}>
          <option value="">Choose a room type</option>
          <option value="KITCHEN">Kitchen</option>
          <option value="BATHROOM">Bathroom</option>
          <option value="BEDROOM">Bedroom</option>
          <option value="HALLWAY">Hallway</option>
          <option value="LIVINGROOM">Living room</option>
          <option value="UTILITYROOM">Utility room</option>
          <option value="OFFICE">Office</option>
          <option value="OTHER">Other</option>
        </select>
        <input type="submit" value="submit"/>
      </form>
    </>
  )
}

export default RoomForm;