import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { number: 1, activity: "Create todo list", key: "1", completed: "true" },
    { number: 2, activity: "Edit todo list", key: "2", completed: "false" },
    { number: 3, activity: "Delete todo list", key: "3", completed: "false" },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {},
    toogleTodo(state, action) {
      const { id, status } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.key === id);
      if (existingTodo) {
        existingTodo.completed = !status;
      }
    },
    deleteTodo(state, action) {},
  },
});

export const { addTodo, toogleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
