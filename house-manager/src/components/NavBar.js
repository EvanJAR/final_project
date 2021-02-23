import {Link} from "react-router-dom";
import Basket from './basketComponents/Basket';

function NavBar({house, basketItems, deleteBasketItem}){

  return(
    <>
      <Link to="/">Welcome Page</Link>
      <Basket deleteBasketItem={deleteBasketItem} basketItems={basketItems} house={house} key={house.id}/>      
    </>
  )
}

export default NavBar;