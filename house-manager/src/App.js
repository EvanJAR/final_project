import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HouseList from "./components/houseComponents/HouseList";
import House from "./containers/House";
import {useState, useEffect} from 'react';

function App() {

  const [houses, setHouses] = useState([]);

  const getAllHouses = () => {
    fetch('http://localhost:8080/houses')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setHouses(data);
    }
    )};

  useEffect(() => {
    getAllHouses();
  }, []);

  console.log(houses);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Welcome Page</h1>
          <p>This is our app and this is how it is used</p>

          <h2>Create a house</h2>
          <p>Form to make house goes here</p>

          <h3>Select your house</h3>
          <p>Option to select existing house</p>
          <HouseList houses={houses}/>
        </Route>
        <Route path="/house/{id}">
          <House/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
