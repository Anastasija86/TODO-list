import { useState } from "react";
import "./App.css";
import AddTodo from "./features/AddTodo";


import TodoList from "./features/TodoList";
import Filter from "./features/filter";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle } from "./features/todoSlice";



function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state)=>state.todos.isOpen)

  const handleAddTaskButton = () => {
    dispatch(modalToggle(isOpen));
  }
  
  return (
    <div className="App">
      {isOpen ? (
        <AddTodo />
      ) : (
        <div>
          <h1 className="App-header">TODO List</h1>
          <div className="App-container">
            <button className="App-button" type="button" onClick={()=>handleAddTaskButton()}>
              Add new task
            </button>
          </div>
          <Filter />
          <TodoList />
        </div>
      )}
      
    </div>
  );
}

export default App;
