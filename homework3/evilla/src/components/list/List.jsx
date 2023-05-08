import React, { useState } from 'react';
import Add from '../add/Add';

function List() {
  const [list, setList] = useState([
    {
      name: "House 1",
      description: "lorem ipsum",
      bedrooms: 2,
      price: 450000,
      address: "ul. Warszawska 1, Warszawa"
    },
    {
      name: "House 2",
      description: "Duży dom z ogrodem i garażem",
      bedrooms: 4,
      price: 850000,
      address: "ul. Kościuszki 1, Kraków"
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
    <div>
        <button onClick={toggleAdd}>{showAdd ? 'Cancel' : 'Add New'}</button>
        {showAdd && (<Add handleAddItem={handleAddItem} />)}
      <h1>Evilla offers:</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.bedrooms} bedrooms</p>
            <p>Price: {item.price} pln</p>
            <p>Adress: {item.address}</p>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default List;
