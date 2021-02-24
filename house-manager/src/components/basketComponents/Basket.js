import BasketItem from "./BasketItem";
import {Icon, Segment} from 'semantic-ui-react';

function Basket ({house, deleteBasketItem, basketItems, basketTotal}) {

    if (!house.basket) {
        return null;
    }

    const basketNodes = basketItems.map((item, index) => {

        if (!item) {
            return null;
        }
        return (
            <BasketItem deleteBasketItem={deleteBasketItem} house={house} item={item} key={index}/>
        )
    });

    return (
        <Segment>
            {basketNodes}
            <div style={{display:'flex', justifyContent:'space-between', marginTop:'5px'}}>
                <p>Basket total: £{basketTotal}</p>
                <Icon name='cart'/>
            </div>
        </Segment>
    );
};

export default Basket;