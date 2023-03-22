import React, { useState } from "react";
import "../css/TodoList.scss";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function TodoList(props) {
  const { todolist, tododelete, setTodo, todoedit } = props;
  // 개별체크
  // 1. 리스트 추가할때마다 todot상태 저장하는 배열생성
  const [check, setCheck] = useState(todolist.map((todo) => todo.checked));
  // 2. check 함수
  const handleCheck = (index) => {
    setCheck((prevChecks) => {
      const newChecks = [...prevChecks];
      newChecks[index] = !newChecks[index]; // switch
      return newChecks;
    });
  };
  // const [check2, setCheck2] = useState([]);
  // const AllCheck = () => {
  //   console.log(todolist);
  // };
  const AllDelete = () => {
    const copyList = [...todolist];
    const filterList = copyList.filter((e) => {
      return false;
    });
    console.log(filterList);
    setTodo(filterList);
  };

  // input value값 수정
  const [editText, setEditText] = useState("");
  // console.log(todolist[0].text);
  const todoEdit = () => {
    setEditText(() => {
      todolist.map((as, i) => {
        return as.text;
      });
    });
    console.log("editText", editText);
  };
  return (
    <ul className="todo_list">
      <li>
        <button onClick={AllDelete} className="btn_delete">
          <span>전체삭제</span>
          <AiFillDelete />
        </button>
      </li>
      {todolist.map((todo, i) => (
        <li key={todolist[i].id} className={check[i] ? "active" : null}>
          {/* check[i] == true면 꽉찬동그라미,아님 빈동그라미 */}
          {check[i] ? <BsCheckCircleFill /> : <BsCheckCircle />}
          <input
            type="checkbox"
            id={todolist[i].id}
            onChange={() => {
              handleCheck(i);
            }}
            autoFocus
          />
          <label htmlFor={todolist[i].id}>{todolist[i].text}</label>
          <div className="btn_wrap">
            <button
              className="btn_edit"
              onClick={() => {
                todoEdit();
              }}
            >
              <AiFillEdit />
            </button>
            <button
              className="btn_delete"
              onClick={() => {
                tododelete(todo.id);
              }}
            >
              <AiFillDelete />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
