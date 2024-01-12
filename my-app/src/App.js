import "./App.css";
import TodoList from "./features/TodoList";
import Filter from "./features/filter";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">TODO List</h1>
      <div className="App-container">
        <button className="App-button" type="button">
          Add task
        </button>
      </div>
      <Filter/>
      <TodoList />
    </div>
  );
}

export default App;
