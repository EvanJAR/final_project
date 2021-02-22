import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HouseList from "./components/houseComponents/HouseList";
import HouseContainer from "./containers/HouseContainer";
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


function App() {

  const [houses, setHouses] = useState([]);
  const [newHouse, setNewHouse] = useState(null);

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


  const displayButtons = houses.map(house => {

    const housePath = house.id;
    console.log("this is the house id", house.id)

    return (
      <li>
        <button><Link to="/house/{housePath}">{house.houseName}</Link></button>
    
      </li>
     
  )})

  const handleSubmit = (event) => {
    if (newHouse != null) {
      createNewHouse();
    } 
  }




  const handleChange = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setNewHouse(userInput)
  }

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
          <h1>Welcome Page</h1>
          <p>This is our app and this is how it is used</p>

          <h2>Create a house</h2>

          <form onSubmit={handleSubmit}>
            <label>
              <input type="text" placeholder="Enter house name" required onChange={handleChange} />
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
        <Route >
          {createHouseRoutes}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
