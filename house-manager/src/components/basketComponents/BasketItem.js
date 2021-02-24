import {Icon} from 'semantic-ui-react';

function BasketItem ({item, deleteBasketItem}) {

  return (
    <div style={{display:'flex'}}>
      <div>
        {item.name}, {item.brand} - {item.price}
      </div>
      <div>
        <Icon  name='remove' onClick={() => deleteBasketItem(item)}>
        </Icon>
      </div>
    </div>
  )
}

export default BasketItem;