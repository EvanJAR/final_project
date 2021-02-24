import {useState} from 'react';
import {Header, Form, Button, Input} from 'semantic-ui-react';

function ItemForm({room, createNewItem}){

  const [newItemName, setNewItemName] = useState(null);
  const [newItemBrand, setNewItemBrand] = useState(null);
  const [newItemPrice, setNewItemPrice] = useState(null);
  // const [newItemUrl, setNewItemUrl] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItemName && newItemBrand && newItemPrice != null) {
      createNewItem({
        'name': `${newItemName}`,
        'brand': `${newItemBrand}`,
        'price': `${newItemPrice}`,
        'sourceURL': 'http://www.google.com',
        'room': {
          'id': `${room.id}`
        }
      });
    }
  };

  const handleNameChange = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setNewItemName(userInput);
  };
  const handleBrandChange = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setNewItemBrand(userInput);
  };
  const handlePriceChange = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setNewItemPrice(userInput);
  };

  // const handleUrlChange = (event) => {
  //   event.preventDefault();
  //   const userInput = event.target.value;
  //   setNewItemUrl(userInput);
  // };

  return (
    <>
      <Header>Create an item</Header>
      <Form onSubmit={handleSubmit} style={{
              padding: '25px'
            }}>
        <Form.Field>
          <Input size='mini' type="text" placeholder="Enter item name" required onChange={handleNameChange} />
          <Input size='mini' type="text" placeholder="Enter brand name" required onChange={handleBrandChange} />
          <Input size='mini' type="number" step="0.01" placeholder="Enter price" required onChange={handlePriceChange} />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
};

export default ItemForm;