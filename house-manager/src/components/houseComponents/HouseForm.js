import {useState} from 'react';
import {Form, Button} from 'semantic-ui-react';

function HouseForm({createNewHouse}){

  const [newHouse, setNewHouse] = useState(null);

  //Handling the submit && creating a new house
  const handleSubmit = (event) => {
    event.preventDefault()
    if (newHouse != null) {
      createNewHouse(newHouse);
    }

  }

  //Handling the text input for changing the newHouse state
  const handleChange = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setNewHouse(userInput)
  }

  return (
    <>
      <Form onSubmit={handleSubmit} style={{
              padding: '25px'
            }}>
        <Form.Field>
          <label>Create a house </label>
          <input required type="text" onChange={handleChange} placeholder='House name..' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}

export default HouseForm;