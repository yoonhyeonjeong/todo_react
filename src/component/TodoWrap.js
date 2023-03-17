import React from "react";
import "../css/TodoWrap.scss";

function TodoWrap({ children }) {
  return <div className="todo_wrap">{children}</div>;
}

export default TodoWrap;
