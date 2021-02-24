import {Icon} from 'semantic-ui-react';

function BasketItem ({item, deleteBasketItem}) {

  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <div>
        {item.name}, {item.brand} - £{item.price}
      </div>
      <div style={{marginLeft:'15px'}}>
        <Icon  name='remove' onClick={() => deleteBasketItem(item)}>
        </Icon>
      </div>
    </div>
  )
}

export default BasketItem;