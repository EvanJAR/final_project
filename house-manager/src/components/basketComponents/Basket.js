import BasketItem from "./BasketItem";
import {useState, useEffect} from 'react';

function Basket ({house, deleteBasketItem, basketItems, basketTotal}) {

    if (!house.basket) {
        return null;
    }

    const basketNodes = basketItems.map((item, index) => {
        return (
            <BasketItem deleteBasketItem={deleteBasketItem} house={house} item={item} key={index}/>
        )
    })

    return (
        <>
            {basketNodes}
            <p>Basket total: £{basketTotal}</p>
        </>
    )
}

export default Basket;