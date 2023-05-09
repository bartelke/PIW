import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../add/Add.css'

function Add(props) {
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
    props.handleAddItem(newItem);
    setNewItemName("");
    setNewItemDescription("");
    setNewItemBedrooms("");
    setNewItemPrice("");
    setNewItemAddress("");
  };

  return (
    <div>
      <div class="header">
        <h1>Book house to find your dream place!</h1>
        <Link to="/"><button id="cancel">Cancel</button></Link>
      </div>
      <form>
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
      <button onClick={handleAddItem}>Dodaj ofertę</button>
      </form>
    </div>
  );
}

export default Add;
