import {Link} from "react-router-dom";
import Basket from './basketComponents/Basket';

function NavBar({house, basketItems, deleteBasketItem}){

  return(
    <>
      <h2>I am the NavBar</h2>
      <Link to="/">Welcome Page</Link>
      <Link to={`/house/${house.id}`}>{house.houseName}</Link>
      <div>
      <Basket deleteBasketItem={deleteBasketItem} basketItems={basketItems} house={house} key={house.id}/>
      </div>
      
    </>
  )
}

export default NavBar;