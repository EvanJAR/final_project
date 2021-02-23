import BasketItem from "./BasketItem";

function Basket ({house, deleteBasketItem}) {

    if (!house.basket) {
        return null;
    }

    const basketNodes = house.basket.basketItems.map(item => {
        return (
            <BasketItem  deleteBasketItem={deleteBasketItem} house={house} item={item}/>
        )
    })

    return (
        <>
        <p>Basket items go here</p>
        {basketNodes}
        </>
    )
}

export default Basket;