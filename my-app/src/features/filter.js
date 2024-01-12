import React from "react";
import styles from '../features/Filter.module.css';
import { FcSearch } from "react-icons/fc";

export default function Filter(){
    return (
      <div>
        <form className={styles.form}>
          <label>
            {" "}
            Find task
            <input className={styles.input} placeholder="name"></input>
          </label>
          <button className={styles.button} type="button">
            <FcSearch />
          </button>
        </form>
      </div>
    );
}