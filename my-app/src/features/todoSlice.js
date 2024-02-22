import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://www.boredapi.com/api";

const initialState = {
  todos: [
    { number: 1, activity: "Create todo list", key: "1", completed: "true" },
  ],
  isOpen: false,
  filter: "",
  fetchedTask: {},
  status: null,
  error: null,
};

export const fetchTask = createAsyncThunk(
  "todos/fetchTask",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get("/activity/");
      if (response.statusText !== "OK") {
        throw new Error("Server error");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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

      state.todos = state.todos.filter((todo) => todo.key !== id);
      state.todos.map((todo, index) => (todo.number = index + 1));
    },
    editTodo(state, action) {
      const { id, text } = action.payload;
      const taskToEdit = state.todos.find((todo) => todo.key === id);
      taskToEdit.activity = text;
    },
    modalToggle(state, action) {
      const isOpen = action.payload;
      state.isOpen = !isOpen;
    },
    setFilter(state, action) {
      const name = action.payload;
      state.filter = name;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTask.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.status = "success";
        state.fetchedTask = action.payload;
      })
      .addCase(fetchTask.rejected, (state, action) => {
        state.status = action.payload;
      });
  },
});

export const {
  addTodo,
  todoToggle,
  deleteTodo,
  modalToggle,
  setFilter,
  editTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
