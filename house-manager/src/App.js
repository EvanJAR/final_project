import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import HouseContainer from "./containers/HouseContainer";
import {useState, useEffect} from 'react';
import HouseForm from './components/houseComponents/HouseForm';
import {Header, Segment} from 'semantic-ui-react';
import Checkout from './containers/Checkout';


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
  }, []);

  const createNewHouse = (houseName) => {
    fetch('http://localhost:8080/houses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'houseName': houseName
      })
    })
    .then(res => res.json())
    .then(data => setHouses(data))
  }

  //Rendering buttons for each house
  const displayButtons = houses.map(house => {

    const housePath = `/house/${house.id}`;

    const deleteHouse = () => {
      fetch(`http://localhost:8080/houses/${house.id}`, {
        method: 'DELETE',
      })
      .then(data => {
        const newHouses = houses.filter(oldHouse => {
          return house.id !== oldHouse.id
        })
        setHouses(newHouses)
      });
    };

    return (
      <li key={house.id}>
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

      <Route path={housePath} key={house.id}>
        <HouseContainer house={house}/> 
      </Route>

    )
  });



  return (
    <Router>

      <Switch>

        <Route exact path="/">
          {/* Welcome message */}
          <div>
            <Header as="h1" textAlign="center" content="Welcome Page" subheader="This is our app and this is how it is used."/>
          </div>

          {/* Creating a new house */}
          <div> 
            <HouseForm createNewHouse={createNewHouse}/>
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

        <Route exact path ="/checkout">
          <Checkout></Checkout>
        </Route>
        
      </Switch>
    </Router>
  );
};

export default App;
