import { useState } from "react";

const Main = (props) => {
    //"odbieranie" rzeczy z nadrzednego komponentu
    const toDoList = props.toDoList;
    const setToDolist = props.setToDoList;

    const listOfTodosDefault = [
        "Wypuscic psa",
        "Zrobic zadanie domowe",
        "Zrobic obiad"
      ];
      
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

    return <section>
        <input value={newToDo} onChange={handleNewToDo}></input>
        <button onClick={handleAddNewToDo}>Add New TODO</button>
        {listOfTodosJSX}
    </section>
}

export default Main;