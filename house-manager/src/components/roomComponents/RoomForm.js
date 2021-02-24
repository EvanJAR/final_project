import {useState} from 'react';
import {Button, Segment, Form, Header, Input} from 'semantic-ui-react';

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

    <Segment>
      <Header>Create a room</Header>
      <Form onSubmit={handleSubmit}>
        <div style={{display:'flex', flexFlow:'nowrap', justifyContent:'space-around', alignItems:'center'}}>
          <div>
            <Input type="text" placeholder="Enter room name" required onChange={handleRoomName} />
          </div>
          <div>
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
          </div>
          <div>
            <Button size='mini' type="submit">Submit</Button>
          </div>
        </div>
      </Form>
    </Segment>
  )
}

export default RoomForm;