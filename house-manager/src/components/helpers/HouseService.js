export const getAllHouses = () => {
    fetch('http://localhost:8080/houses')
    .then(res => res.json())
    };

  export const createNewHouse = () => {
    fetch('http://localhost:8080/houses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'houseName': `${newHouse}`
      })
    })
    .then(res => console.log(res.statusText))
  }
