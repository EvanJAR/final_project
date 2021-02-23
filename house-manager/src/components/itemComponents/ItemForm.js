import {useState} from 'react';

function ItemForm({room, createNewItem}){

  const [newItemName, setNewItemName] = useState(null);
  const [newItemBrand, setNewItemBrand] = useState(null);
  const [newItemPrice, setNewItemPrice] = useState(null);
  const [newItemUrl, setNewItemUrl] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItemName, newItemBrand, newItemPrice, newItemUrl != null) {
      createNewItem({
        'name': `${newItemName}`,
        'brand': `${newItemBrand}`,
        'price': `${newItemPrice}`,
        'sourceURL': `${newItemUrl}`,
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
    console.log(userInput);
  };
  const handleBrandChange = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setNewItemBrand(userInput);
    console.log(userInput);
  };
  const handlePriceChange = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setNewItemPrice(userInput);
    console.log(userInput);
  };
  const handleUrlChange = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setNewItemUrl(userInput);
    console.log(userInput);
  };

  return (
    <>
      <h2>Create an item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Enter item name" required onChange={handleNameChange} />
          <input type="text" placeholder="Enter brand name" required onChange={handleBrandChange} />
          <input type="number" step="0.01" placeholder="Enter price" required onChange={handlePriceChange} />
          <input type="url" placeholder="Enter url" required onChange={handleUrlChange} />
        </label>
        <input type="submit" value="submit"/>
      </form>
    </>
  )
};

export default ItemForm;