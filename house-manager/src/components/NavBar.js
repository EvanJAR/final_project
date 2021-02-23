import {Link} from "react-router-dom";
import Basket from './basketComponents/Basket';
function NavBar({house}){

  return(
    <>
      <h2>I am the NavBar</h2>
      <Link to="/">Welcome Page</Link>
      <Link to={`/house/${house.id}`}>{house.houseName}</Link>
      <div>
      <Basket house={house}/>
      </div>
      
    </>
  )
}

export default NavBar;