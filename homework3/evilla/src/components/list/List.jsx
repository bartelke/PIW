import React, { useState } from 'react';

function List() {
    const [list, setList] = useState([
      {
        name: "Ap 1",
        description: "lorem ipsum",
        bedrooms: 2,
        price: 450000,
        address: "sdadsad"
      },
      {
        name: "House 2",
        description: "lorem ipsum",
        bedrooms: 4,
        price: 850000,
        address: "dsffs"
      }
    ]);
  
    const [newItemName, setNewItemName] = useState("");
    const [newItemDescription, setNewItemDescription] = useState("");
    const [newItemBedrooms, setNewItemBedrooms] = useState("");
    const [newItemPrice, setNewItemPrice] = useState("");
    const [newItemAddress, setNewItemAddress] = useState("");
  
    const handleAddItem = () => {
      const newItem = {
        name: newItemName,
        description: newItemDescription,
        bedrooms: newItemBedrooms,
        price: newItemPrice,
        address: newItemAddress
      };
      setList([...list, newItem]);
      setNewItemName("");
      setNewItemDescription("");
      setNewItemBedrooms("");
      setNewItemPrice("");
      setNewItemAddress("");
    };
  
    const handleDeleteItem = index => {
      const newList = [...list];
      newList.splice(index, 1);
      setList(newList);
    };
  
    return (
      <div>
        <h1>Our offer:</h1>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.bedrooms} bedrooms</p>
              <p>Price: {item.price} zł</p>
              <p>Adress: {item.address}</p>
              <button onClick={() => handleDeleteItem(index)}>Usuń</button>
            </li>
          ))}
        </ul>
        <div>
          <h2>Add new</h2>
          <label>
            Name:
            <input
              type="text"
              value={newItemName}
              onChange={e => setNewItemName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              value={newItemDescription}
              onChange={e => setNewItemDescription(e.target.value)}
            />
          </label>
          <br />
          <label>
            Bedrooms:
            <input
              type="number"
              value={newItemBedrooms}
              onChange={e => setNewItemBedrooms(e.target.value)}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              value={newItemPrice}
              onChange={e => setNewItemPrice(e.target.value)}
            />
          </label>
          <br />
          <label>
            Adress:
            <input
              type="text"
              value={newItemAddress}
              onChange={e => setNewItemAddress(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleAddItem}>Add</button>
        </div>
      </div>
    );
  }
  export default List;