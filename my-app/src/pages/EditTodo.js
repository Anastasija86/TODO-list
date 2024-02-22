import React, { useState } from "react";
import styles from "../features/AddTodo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../features/todoSlice";
import { useNavigate, useParams} from "react-router-dom";

export default function EditTodo() {
  const todos = useSelector((state) => state.todos.todos);
  const params = useParams();
  const id = params.id;

  const textToEdit = todos.find((todo) => todo.key === id).activity;

  const [text, setText] = useState(textToEdit);

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const onChange = (e) => {
    setText(e.target.value);
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTodo({ id, text }));
        navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Edit task </h1>
      <div className={styles.addConteiner}>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          name="editTask"
        >
          <input
            className={styles.input}
            name="editTask"
            type="text"
            value={text}
            onChange={(e) => onChange(e)}
          ></input>
          <button className={styles.button} type="submit" >
            Save
          </button>
              </form>
      </div>
    </div>
  );
}

