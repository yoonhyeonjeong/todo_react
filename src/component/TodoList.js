import React, { useState } from "react";
import "../css/TodoList.scss";
import { BsCheckCircleFill, BsCheckCircle, BsPencilSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import MemoDialog from "./MemoDialog";

function TodoList(props) {
  const { todolist, tododelete, setTodo } = props;
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
  
  // 전체 삭제
  const AllDelete = () => {
    setTodo([]);
  };

  // memodialog 상태값
  const [editMode, setEditMode] = useState(false);
  const memoOpen = () => {
    setaddMemo("");
    setEditMode(true);
  };
  const closeMemo = () => {
    setEditMode(false);
  };

  // memo 배열 업데이트
  const [addMemo, setaddMemo] = useState(todolist.map((todo) => todo.memo));
  const memoCheck = (e, index) => {
    // // 1. 메모 배열 카피
    // const copyMemo = [...addMemo];
    // // 2. 메모 배열의 n번째  = 현재value
    // copyMemo[index] = e.target.value;
    // // 3. 메모 배열 업데이트
    // setaddMemo(copyMemo);

    setaddMemo((prevMemo) => {
      console.log('prevMemo', prevMemo)
      const newMemo = [...prevMemo];
      newMemo[index] = e.target.value;
      return newMemo;
    });
  };
  console.log(addMemo)
  // todoAdd
  const todoAdd = (id) => {
    // id와 일치하는 투두 아이템 찾기
    const targetTodo = todolist.find((todo) => todo.id === id);
    // // targetTodo의 memo 속성값 변경
    targetTodo.memo = addMemo[id];
    // // todos state 업데이트
    setTodo([...todolist]);
    setaddMemo("");
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
          <div className="memo_text">{todolist[i].memo}</div>
          <div className="btn_wrap">
            <button className="btn_edit" onClick={memoOpen}>
              <BsPencilSquare />
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
          <MemoDialog
            editmode={editMode}
            closememo={closeMemo}
            addmemo={addMemo[i]}
            memocheck={(e) => memoCheck(e, i)}
            todoadd={todoAdd}
            id={todo.id}
            index={i}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
