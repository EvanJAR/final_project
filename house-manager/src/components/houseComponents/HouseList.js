import House from "../../containers/House";
import {getAllHouses} from '../helpers/HouseService';

function HouseList({houses}){
  if (!houses) return null;

  const displayHouses = houses.map(house => {

    return(
      <House house={house} key={house.id}/>
    )
  })

  return(
    <>
      <h1>This is a list of house objects</h1>
      {/* Here we do a fetch to the database to find houses that already exist */}
      {/* House 1 - on click re-route to "houses/{1}" */}
      <div>{displayHouses}</div>
    </>
  )
}

export default HouseList;