import React, { useState } from "react";
import data from "../data";
import "../css/List.scss";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";

function List(props) {
  const [todos, settodos] = useState(data);
  const [check, setCheck] = useState(todos.map(() => false));
  const handleCheck = (index) => {
    setCheck((prevChecks) => {
      return prevChecks.map((check, i) => (i === index ? !check : check));
    });
  };
  return (
    <ul className="todo_list">
      {todos.map((todo, i) => (
        <li key={todos[i].id}>
          {check[i] ? <BsCheckCircleFill /> : <BsCheckCircle />}
          <input
            type="checkbox"
            id={todos[i].id}
            checked={check[i]}
            onChange={() => {
              handleCheck(i);
            }}
          />
          <label htmlFor={todos[i].id}>{todos[i].text}</label>
        </li>
      ))}
    </ul>
  );
}

export default List;
