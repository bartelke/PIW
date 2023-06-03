import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/list/List';
import Add from './components/add/Add';
import './App.css';
import { useDispatch } from 'react-redux';
import { setListValue } from './features/offers/offersSlice';
import { Followed } from './components/followed/Followed';
import Login from './components/login/Login';

// import { logInWithGoogle, useAuth, logout } from "../Firebase/UserService";

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        dispatch(setListValue(data))
        
       // setList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Login/>
      <Router>
        <Routes>
          <Route path="/" element={<List   />} />
          <Route path="/add" element={<Add />} />
          <Route path="/followed" element={<Followed />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
