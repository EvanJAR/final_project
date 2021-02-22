import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HouseList from "./components/houseComponents/HouseList";
import HouseContainer from "./containers/HouseContainer";
import {useState, useEffect} from 'react';

function App() {

  const [houses, setHouses] = useState([]);
  const [newHouse, setNewHouse] = useState("");

  const getAllHouses = () => {
    fetch('http://localhost:8080/houses')
    .then(res => res.json())
    .then(data => {
      setHouses(data);
    }
    )};

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

  useEffect(() => {
    getAllHouses();
  }, []);


  const displayButtons = houses.map(house => {
    return (
      <li>
      <button link="/house/{house.id}">{house.houseName}</button>
      </li>
     
  )})

  const handleSubmit = (event) => {
    createNewHouse();
  }

  const handleChange = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setNewHouse(userInput)
  }




  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Welcome Page</h1>
          <p>This is our app and this is how it is used</p>

          <h2>Create a house</h2>

          <form onSubmit={handleSubmit}>
            <label>
              Enter house name:
              <input type="text" onChange={handleChange} />
            </label>
            <input type="submit" value="submit"/>
          </form>

          <div>
          <h3>Select your house</h3>
            <ul>
              {displayButtons}
            </ul>
          </div>
          

        </Route>
        <Route path="/house/{id}">
          <HouseContainer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
