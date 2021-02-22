import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import HouseContainer from "./containers/HouseContainer";
import {useState, useEffect} from 'react';
import HouseForm from './components/houseComponents/HouseForm';

function App() {

  //Use states
  const [houses, setHouses] = useState([]);
  // const [newHouse, setNewHouse] = useState(null);

  // //House service - get all houses, create new house, useEffect
  // const createNewHouse = () => {
  //   fetch('http://localhost:8080/houses', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       'houseName': `${newHouse}`
  //     })
  //   })
  //   .then(res => console.log(res.statusText))
  // }

  const getAllHouses = () => {
    fetch('http://localhost:8080/houses')
    .then(res => res.json())
    .then(data => {
      setHouses(data);
    }
  )};

  useEffect(() => {
    getAllHouses()
  }, []);

  //Rendering buttons for each house
  const displayButtons = houses.map(house => {
    const housePath = house.id;
    console.log("this is the house id", house.id)
    return (
      <li>
        <button><Link to="/house/{housePath}">{house.houseName}</Link></button>
      </li>
    )
  })

  // //Handling the submit && creating a new house
  // const handleSubmit = (event) => {
  //   if (newHouse != null) {
  //     createNewHouse();
  //   } 
  // }

  // //Handling the text input for changing the newHouse state
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   const userInput = event.target.value;
  //   setNewHouse(userInput)
  // }

  //Creating individual routes for each house object in houses
  const createHouseRoutes = houses.map(house => {
    const housePath = house.id
    return (
      <Route exact path="/house/{housePath}">
        <HouseContainer house={house} /> 
      </Route>
    )
  })

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* Welcome message */}
          <div>
            <h1>Welcome Page</h1>
            <p>This is our app and this is how it is used</p>
          </div>


          {/* Creating a new house */}
          <div> 
            <HouseForm/>
          </div>


          {/* Selecting house that already exists */}
          <div>
            <h3>Select your house</h3>
            <ul>
              {displayButtons}
            </ul>
          </div>
        </Route>
        {/* Creating routes for each element by mapping over each house in houses */}
        <div>
          {createHouseRoutes}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
