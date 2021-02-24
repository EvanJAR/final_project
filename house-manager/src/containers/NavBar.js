import {Link} from "react-router-dom";
import Basket from '../components/basketComponents/Basket';
import {Container, Header, Icon} from 'semantic-ui-react'

function NavBar({house, basketItems, deleteBasketItem, basketTotal}){

  return(
    <Container>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', padding:'30px'}}>
        <div>
          <Link to="/">
            <Icon name='home' size='huge' color='black'/>
          </Link>
        </div>
        <div>
          <Header size='huge'>YourRooms</Header>
        </div>
        <div>
          <Basket basketTotal={basketTotal} deleteBasketItem={deleteBasketItem} basketItems={basketItems} house={house} key={house.id}/>
        </div>
      </div>
    </Container>
  )
}

export default NavBar;