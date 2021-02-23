import {useState} from 'react';

function HouseForm({basket}){

  const [newHouse, setNewHouse] = useState(null);

  //Handling the submit && creating a new house
  const handleSubmit = () => {
    if (newHouse != null) {
      createNewHouse();
    } 
  }

  //Handling the text input for changing the newHouse state
  const handleChange = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setNewHouse(userInput)
  }

  //House service - get all houses, create new house, useEffect
  const createNewHouse = () => {
    fetch('http://localhost:8080/houses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'houseName': `${newHouse}`
      })
    })
    .then(res => console.log(res.statusText))
  }

  return (
    <>
      <h2>Create a house</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Enter house name" required onChange={handleChange} />
        </label>
        <input type="submit" value="submit"/>
      </form>
    </>
  )
}

export default HouseForm;