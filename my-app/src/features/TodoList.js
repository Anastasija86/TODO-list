import React from "react";
import PropTypes from "prop-types";
import styles from "../features/TodoList.module.css";


import { FcFullTrash } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";

import { useDispatch, useSelector } from "react-redux";
import { todoToggle, deleteTodo } from "../features/todoSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state)=>state.todos.filter.toLowerCase())
  const dispatch = useDispatch();
  const toggleTodo = ({ status, id }) => {
    dispatch(todoToggle({ status, id }));
  };
  const onDeleteTodo = ({ id }) => {
    dispatch(deleteTodo({ id }));
  };
  const getVisibleTodos = () => {
    let visibleTodos = todos;
    if (filter.length > 0) {
      visibleTodos = todos.filter((todo)=>todo.activity.toLowerCase().includes(filter.toLowerCase()))
    }
    return visibleTodos;
  }

  const visibleTodos = getVisibleTodos();

  console.log(visibleTodos)
  
  return (
    <div>
      {todos.length && (
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
              {visibleTodos.map(({ number, activity, key, completed }) => {
                const status = JSON.parse(completed);
                return (
                  <tr key={key}>
                    <td>{number}</td>
                    <td>{activity}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={status}
                        onChange={() => toggleTodo({ status, id: key })}
                      ></input>
                    </td>
                    {/* <td>{status}</td> */}
                    <td>
                      <button className={styles.button} type="button">
                        <FcEditImage />
                      </button>
                    </td>
                    <td>
                      <button
                        className={styles.button}
                        type="button"
                        onClick={() => onDeleteTodo({ id: key })}
                      >
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
