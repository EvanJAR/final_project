import {Link} from "react-router-dom";
import Basket from '../components/basketComponents/Basket';
import {Container, Header} from 'semantic-ui-react'

function NavBar({house, basketItems, deleteBasketItem, basketTotal}){

  return(
    <Container>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px'}}>
        <div>
          <Header>
            <Link to="/">Welcome Page</Link>
          </Header>
        </div>
        <div>
          <Basket basketTotal={basketTotal} deleteBasketItem={deleteBasketItem} basketItems={basketItems} house={house} key={house.id}/>
        </div>
      </div>
    </Container>
  )
}

export default NavBar;