import React, { useState } from "react";
import styles from "../features/Filter.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../features/todoSlice";

export default function Filter() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const text = e.target.value;
    setName(text);
    dispatch(setFilter(name));
  };

  return (
    <div>
      <form className={styles.form}>
        <label>
          {" "}
          Find task
          <input
            className={styles.input}
            placeholder="name"
            type="text"
            value={name}
            onChange={handleChange}
          ></input>
        </label>
      </form>
    </div>
  );
}
