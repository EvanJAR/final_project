import BasketItem from "./BasketItem";

function Basket ({house, deleteBasketItem, basketItems}) {

    if (!house.basket) {
        return null;
    }

    const basketNodes = basketItems.map((item, index) => {
        return (
            <BasketItem  deleteBasketItem={deleteBasketItem} house={house} item={item} key={index}/>
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