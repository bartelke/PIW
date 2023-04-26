import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Main from './pages/Main'

function App() {
  const listOfTodosDefault = [
    "Wypuscic psa",
    "Zrobic zadanie domowe",
    "Zrobic obiad"
  ];
  //hook:
  const [toDoList, setToDolist] = useState(listOfTodosDefault);

  
  return (
    <div className="App">
      <main>
        <header>To jest header</header>
        <nav>
            <a>main</a>
            <a>search</a>
          </nav>
          {/*przekazanie listy do maina */}
          <Main toDoList={toDoList} setToDolist={setToDolist}/>
      </main>
    </div>
  );
}

export default App;
