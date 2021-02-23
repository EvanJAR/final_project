import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import HouseContainer from "./containers/HouseContainer";
import {useState, useEffect} from 'react';
import HouseForm from './components/houseComponents/HouseForm';


function App() {

  //Use states
  const [houses, setHouses] = useState([]);

  const getAllHouses = () => {
    fetch('http://localhost:8080/houses')
    .then(res => res.json())
    .then(data => {
      setHouses(data);
    }
  )};

  useEffect(() => {
    getAllHouses()
  }, [houses]);

  //Rendering buttons for each house
  const displayButtons = houses.map(house => {

    const housePath = `/house/${house.id}`;

    const deleteHouse = () => {
      fetch(`http://localhost:8080/houses/${house.id}`, {
        method: 'DELETE',
      })
      .then(res => console.log(res.status))
    }

    return (
      <li>
        <button>
          <Link to={housePath}>{house.houseName}</Link>
        </button>
        <button onClick={deleteHouse}>Delete house</button>
      </li>
    )
  });

  //Creating individual routes for each house object in houses
  const createHouseRoutes = houses.map(house => {

    const housePath = `/house/${house.id}`;

    return (

      <Route path={housePath}>
        <HouseContainer house={house} key={house.id}/> 
      </Route>

    )
  });



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
            <HouseForm />
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
        {createHouseRoutes}
        
      </Switch>
    </Router>
  );
};

export default App;
