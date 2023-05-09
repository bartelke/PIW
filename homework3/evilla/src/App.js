import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import List from './components/list/List.jsx';
import Add from './components/add/Add.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;

