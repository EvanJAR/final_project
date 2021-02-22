import {useState} from 'react';

function RoomForm({house}){

  const [newRoom, setNewRoom] = useState(null);
  const [roomType, setRoomType] = useState(null);

  const handleSubmit = () => {
    if (newRoom != null) {
      createNewRoom();
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setNewRoom(userInput);
    console.log(userInput);
  };

  const handleRoomTypeSelect = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setRoomType(userInput);
    console.log(userInput);
  };

  const createNewRoom = () => {
    fetch(`http://localhost:8080/houses/${house.id}/rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': `${newRoom}`,
        'roomType': `${roomType}`,
        'house': {
          'id': `${house.id}`
        }
      })
    })
    .then(res => console.log(res.statusText))
  }

  return(

    <>
      <h2>Create a room</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Enter room name" required onChange={handleChange} />
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