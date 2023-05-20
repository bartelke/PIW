import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/list/List';
import Add from './components/add/Add';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
