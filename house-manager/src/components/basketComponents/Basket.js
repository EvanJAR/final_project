import {useState, useEffect} from 'react';

function Basket ({house, deleteItem}) {

    if (!house.basket) {
        return null;
    }

    const basketNodes = house.basket.basketItems.map(item => {
        
        return (
            <>
                <p>{item.name}, {item.brand} - {item.price}</p> 
                <button onClick={ () => deleteItem(item)}>Remove From Basket</button>
            </>
        )
    })

    return (
        <>
        {basketNodes}
        </>
    )
}

export default Basket;