

function Basket ({house}) {
   
    const basketNodes = house.basket.basketItems.map(item => {
        const deleteItem = () => {
            fetch(`http://localhost:8080/houses/${house.id}/basket/${item.id}`, {
                method: 'DELETE'
            })
            .then(res => console.log(res.status))
        }   
        
        return (
            <>
                <p>{item.name}, {item.brand} - {item.price}</p> 
                <button onClick={deleteItem}>Remove From Basket</button>
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