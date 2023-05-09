import React, { useState } from 'react';
import Add from '../add/Add';
import '../list/List.css';

function List() {
  const [list, setList] = useState([
    {
      name: "Villa C13",
      description: "villa with round windows, in summer you will feel the tropical atmosphere of the place",
      bedrooms: 12,
      price: 8000000,
      address: "wybrzeże Stanisława Wyspiańskiego 23-25, 50-370 Wrocław"
    },
    {
      name: "Villa C16",
      description: "a large estate with modern architecture located in a place known for the conquests of the Vikings, you can still meet their descendants here",
      bedrooms: 4,
      price: 6000000,
      address: "Janiszewskiego 7, 50-372 Wrocław"
    }
  ]);
  
  const [showAdd, setShowAdd] = useState(false);

  const toggleAdd = () => {
    setShowAdd(!showAdd);
  }

  const handleAddItem = newItem => {
    setList([...list, newItem]);
  };

  const handleDeleteItem = index => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div class="container">
      <div class="header">
        <h1>Book house to find your dream place!</h1>
        <button onClick={toggleAdd}>{showAdd ? 'Cancel' : 'Add New'}</button>
          {showAdd && (<Add handleAddItem={handleAddItem} />)}
      </div>
        
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.bedrooms} bedrooms</p>
            <p>Adress: {item.address}</p>
            <div class="footer">
              <p><strong>Price: {item.price} pln</strong></p>
              <button onClick={() => handleDeleteItem(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default List;
