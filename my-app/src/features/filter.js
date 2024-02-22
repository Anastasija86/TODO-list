import React from "react";
import styles from "../features/Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/todoSlice";

export default function Filter() {
const filter = useSelector((state)=>state.todos.filter)

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const text = e.target.value;
    dispatch(setFilter(text));
  };

  return (
    <div>
      <form className={styles.form} name="filter">
        <label>
          {" "}
          Find task
          <input
            className={styles.input}
            name="filter"
            placeholder="name"
            type="text"
            value={filter}
            onChange={handleChange}
          ></input>
        </label>
      </form>
    </div>
  );
}
