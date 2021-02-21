import House from "../../containers/House";
import {useState, useEffect} from 'react';
import {getAllHouses} from '../helpers/HouseService';

function HouseList(){

  const [houses, setHouses] = useState([]);

  
  const getAllHouses = () => {
    fetch('http://localhost:8080/houses')
    .then(res => res.json())
    .then(data => setHouses(data));
  }

  useEffect(() => {
    getAllHouses();
  }, [])



console.log("console of houses outside", houses)

  return(
    <>
      <h1>This is a list of house objects</h1>
      {/* Here we do a fetch to the database to find houses that already exist */}
      {/* House 1 - on click re-route to "houses/{1}" */}
      
    </>
  )
}

export default HouseList;