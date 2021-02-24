import {Icon} from 'semantic-ui-react';

function Item({item, deleteItem, addItemToBasket}){

  return(
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
      <p>{item.name}, {item.brand} - £{item.price}</p>
      <div style={{marginLeft: '15px'}}>
        <Icon name='plus square' onClick={() => addItemToBasket(item)}/>
        <Icon name='minus square' onClick={() => deleteItem(item)}/>
      </div>
    </div>
  )
}

export default Item;