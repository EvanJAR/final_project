import {Link} from "react-router-dom";
import Basket from './basketComponents/Basket';
import {useState, useEffect} from 'react';

function NavBar({house}){

  const [basketItems, setBasketItems] = useState([])

  const getBasketItems = () => {
      fetch(`http://localhost:8080/houses/${house.id}/basket/items`)
      .then(res => res.json())
      .then(data => {
          setBasketItems(data);
      });
  };

  const deleteItem = (item) => {
    fetch(`http://localhost:8080/houses/${house.id}/basket/${item.id}`, {
        method: 'DELETE'
    })
    .then(data => {
        const newBasket = basketItems.filter(oldItem => {
            return item.id !== oldItem.id
        })
        console.log(newBasket)
        setBasketItems(newBasket);
        console.log(basketItems)
    });
  };

  useEffect(() => {
      getBasketItems();
  }, []);

  return(
    <>
      <h2>I am the NavBar</h2>
      <Link to="/">Welcome Page</Link>
      <Link to={`/house/${house.id}`}>{house.houseName}</Link>
      <div>
      <Basket deleteItem={deleteItem} house={house}/>
      </div>
      
    </>
  )
}

export default NavBar;