import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const listOfTodosDefault = [
    "Wypuscic psa",
    "Zrobic zadanie domowe",
    "Zrobic obiad"
  ];

  //hook:
  const [toDoList, setToDolist] = useState(listOfTodosDefault);
  const [newToDo, setNewToDo] = useState("");
  const handleNewToDo = (event) =>{
    console.log(event.target.value);
    setNewToDo(event.target.value);
  }

  //obsluga buttona:
  const handleAddNewToDo = () =>{
    //wezmie nam zawartosc todo listy, polaczy z nowym i zwroci
    setToDolist(toDoList.concat(newToDo)); 
  }
  const listOfTodosJSX = listOfTodosDefault.map(it => <p>{it}</p>)
  
  return (
    <div className="App">
      <main>
        <header>To jest header</header>
        <nav>
            <a>main</a>
            <a>search</a>
          </nav>
        <section>
          <input value={newToDo} onChange={handleNewToDo}></input>
          <button onClick={handleAddNewToDo}>Add New TODO</button>
          {listOfTodosJSX}
        </section>
      </main>
    </div>
  );
}

export default App;
