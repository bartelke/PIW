import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/list/List';
import Add from './components/add/Add';
import './App.css';

function App() {
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

  const handleAddItem = newItem => {
    setList([...list, newItem]);
  };

  const handleDeleteItem = index => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<List list={list} handleDeleteItem={handleDeleteItem} />} />
          <Route path="/add" element={<Add handleAddItem={handleAddItem} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
