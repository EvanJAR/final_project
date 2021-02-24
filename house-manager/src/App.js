import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import HouseContainer from "./containers/HouseContainer";
import {useState, useEffect} from 'react';
import HouseForm from './components/houseComponents/HouseForm';
import {Container, Header, Button, List, Divider, Icon} from 'semantic-ui-react';
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
        <List.Item key={house.id} style={{padding: '10px'}}>
          <List.Content floated="left">
            <Button style={{marginLeft: '50px'}}>
              <Link to={housePath}>
                <List.Icon name="home" size="large"/>
                {house.houseName}
              </Link>
            </Button>
          </List.Content>
          <List.Content floated="right">
            <Button onClick={deleteHouse} style={{marginRight: '50px'}}>
              <List.Icon name="delete" size="large"/>
              Delete house
            </Button>
          </List.Content>
        </List.Item>
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
          <Container>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <div>
                <Header as="h1" textAlign="center" subheader="This is our app and this is how it is used." style={{padding: '20px', marginTop: '15px'}}>
                  <Icon name="home"/>
                  YourHouse
                </Header>
              </div>
              <div>
                <List floated='right' style={{marginTop: '15px'}}>
                  <List.Item>
                    <List.Content><a href="https://github.com/EvanJAR" style={{textDecoration: 'none', color: 'black'}}>Evan Reid - EvanJAR <List.Icon name="github square"/></a></List.Content>
                  </List.Item>
                </List>
                <List>
                  <List.Item>
                    <List.Content><a href="https://github.com/4Bics" style={{textDecoration: 'none', color: 'black'}}>Cameron Maclean - 4Bics <List.Icon name="github square"/></a></List.Content>
                  </List.Item>
                </List>
              </div>
            </div>

            <Divider/>

            <HouseForm createNewHouse={createNewHouse}/>

            <Header as="h3" content="Select your house" textAlign="center"/>
            <Divider horizontal><Icon name="angle double down"/></Divider>
            <List  verticalAlign="middle">
              {displayButtons}
            </List>
          </Container>
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
