import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { number: 1, activity: "Create todo list", key: 1, completed: "true" },
    { number: 2, activity: "Edit todo list", key: 2, completed: "false" },
    { number: 3, activity: "Delete todo list", key: 3, completed: "false" },
  ],
  isOpen: false,
  filter: ''
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    todoToggle(state, action) {
      const { id, status } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.key === id);
      if (existingTodo) {
        existingTodo.completed = !status;
      }
    },
    deleteTodo(state, action) {
      const { id } = action.payload;

      state.todos = state.todos
        .filter((todo) => todo.key !== id);
      state.todos.map((todo,index)=>todo.number= index+1)

    },
    modalToggle(state, action) {
      const isOpen = action.payload;
      state.isOpen = !isOpen;
    },
    setFilter(state, action) {
      const name = action.payload;
      state.filter = name;
    }
  },
});

export const { addTodo, todoToggle, deleteTodo, modalToggle, setFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
