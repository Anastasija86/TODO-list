import React, {useEffect} from "react";
import styles from "../features/AddTodo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import { modalToggle, fetchTask } from "../features/todoSlice";

export default function AddTodo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const task = useSelector((state) => state.todos.fetchedTask);
  const isOpen = useSelector((state) => state.todos.isOpen);

  useEffect(() => {
    dispatch(fetchTask())
  }, [dispatch])

  const getNumber = () => {
    return todos.length + 1;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.task.value;
    const form = e.target;
    const newTask = {
      number: getNumber(),
      activity: value,
      key: nanoid(),
      completed: "false",
    };
    dispatch(addTodo(newTask));
    form.reset();
    dispatch(modalToggle(isOpen));
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Add new task </h1>
      <div className={styles.addConteiner}>
        <form className={styles.form} onSubmit={handleSubmit} name="addTask">
          <input
            className={styles.input}
            list="tasks"
            name="addTask"
            id="task"
            type="text"
          ></input>
          <datalist id="tasks">
            <option>{task.activity}</option>)

          </datalist>
          <button className={styles.button} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
