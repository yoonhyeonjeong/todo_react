import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import "../css/TodoHead.scss";
function TodoHead(props) {
  const { todoinsert, todocheck, todo } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    todoinsert();
  };
  return (
    <div className="todo_head">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={todo}
          onChange={(e) => {
            todocheck(e);
          }}
        />
        <button className="todo_btn" type="submit">
          <BsPlusCircleFill />
        </button>
      </form>
    </div>
  );
}

export default TodoHead;
