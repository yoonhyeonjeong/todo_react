import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import "../css/TodoHead.scss";
function TodoHead() {
  const [text, setText] = useState("");
  const todoCheck = (e) => {
    setText(e.target.value);
  };
  const todoInsert = () => {
    console.log(text);
  };
  return (
    <div className="todo_head">
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={(e) => {
          todoCheck(e);
        }}
      />
      <button className="todo_btn" onClick={todoInsert}>
        <BsPlusCircleFill />
      </button>
    </div>
  );
}

export default TodoHead;
