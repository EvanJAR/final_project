import {Link} from "react-router-dom";
import Basket from '../components/basketComponents/Basket';
import {Container} from 'semantic-ui-react'

function NavBar({house, basketItems, deleteBasketItem}){

  return(
    <Container>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <Link to="/">Welcome Page</Link>
        </div>
        <div>
          <Basket deleteBasketItem={deleteBasketItem} basketItems={basketItems} house={house} key={house.id}/>
          <Link to="/checkout">Checkout</Link>
        </div>
      </div>
    </Container>
  )
}

export default NavBar;