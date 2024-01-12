import React from "react";
import PropTypes from "prop-types";
import styles from "../features/TodoList.module.css";
import { FcFullTrash } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import toogleTodo from "../features/todoSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const todoToogle = ({ status, id }) => {
    dispatch(toogleTodo(status, id));
  };
  return (
    <div>
      {todos.length > 0 && (
        <div className={styles.container}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>№</th>
                <th>Title</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
              {todos.map(({ number, activity, key, completed }) => {
                const status = JSON.parse(completed);
                return (
                  <tr key={key}>
                    <td>{number}</td>
                    <td>{activity}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={status}
                        onChange={() => todoToogle({ status, id: key })}
                      ></input>
                    </td>
                    {/* <td>{status}</td> */}
                    <td>
                      <button className={styles.button} type="button">
                        <FcEditImage />
                      </button>
                    </td>
                    <td>
                      <button className={styles.button} type="button">
                        <FcFullTrash />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
};
