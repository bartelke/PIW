import React, { useState } from 'react';
import './Add.css';
import { Link } from 'react-router-dom';

function Add(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [bedrooms, setBedrooms] = useState(0);
  const [price, setPrice] = useState(0);
  const [address, setAddress] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleBedroomsChange = event => {
    setBedrooms(event.target.value);
  };

  const handlePriceChange = event => {
    setPrice(event.target.value);
  };

  const handleAddressChange = event => {
    setAddress(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newItem = { name, description, bedrooms, price, address };
    props.handleAddItem(newItem);
    setName('');
    setDescription('');
    setBedrooms(0);
    setPrice(0);
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit} className="Add">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} required />
      <label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={handleDescriptionChange} required />
      <label htmlFor="bedrooms">Bedrooms:</label>
      <input type="number" id="bedrooms" value={bedrooms} onChange={handleBedroomsChange} required />
      <label htmlFor="price">Price:</label>
      <input type="number" id="price" value={price} onChange={handlePriceChange} required />
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" value={address} onChange={handleAddressChange} required />
      <button type="submit">Add</button>
      <Link to="/"><button>Add New</button></Link>
    </form>
  );
}

export default Add;
