import "./App.css";
import React, { useState } from "react";
import TodoWrap from "./component/TodoWrap";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
import Dialog from "./component/Dialog";
function App() {
  //  input 초기값 주기
  const [todo, setTodo] = useState("");
  // input 값 집어넣기~
  const todoCheck = (e) => {
    setTodo(e.target.value);
  };
  // 빈배열 생성
  const [todos, setTodos] = useState([]);

  const todoInsert = () => {
    // input value값 없으면 X
    if (!todo) {
      return; // 함수실행종료
    }
    if (todos.length > 9) {
      setIsOpen(true);
      return; // 함수실행종료
    }
    // 새로운 객체 형태의 변수 생성 해서 빈배열에 집어넣기
    const newTodo = {
      id: todos.length,
      text: todo,
      memo: "",
    };
    setTodos([...todos, newTodo]);
    // insert 하고 남은값 초기화
    setTodo("");
    console.log(todos.length);
  };
  // console.log("todos", todos.index);
  const todoDelete = (id) => {
    // 1. 배열 복사
    const copyArray = [...todos];
    // 2. 카피한 변수에 변형주기
    const filterArray = copyArray.filter((e) => {
      return e.id !== id;
    });
    setTodos(filterArray);
  };
  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const closeDialog = () => {
    setIsOpen(false);
  };
  // add text
  // 1. useState에 빈값 담기
  const [addMemo, setaddMemo] = useState("");
  // 2. 함수실행
  const todoAdd = (e) => {
    // 3. state변경함수에 현재 value값 넣기
    setaddMemo(e.target.value);
    // 4. 할일들 변수 카피
    const copyArray = [...todos];
    // 5. 카피한 변수 변형주기
    copyArray.map((item) => {});
    setTodos(copyArray);
    console.log(todos);
    console.log(e.target.value);
  };
  console.log(todos);
  return (
    <div className="App">
      <TodoWrap>
        <div>
          <h2>Todo - {todos.length}tasks</h2>
        </div>
        <TodoHead todoinsert={todoInsert} todocheck={todoCheck} todo={todo} todoAdd={todoAdd} />
        <TodoList todolist={todos} tododelete={todoDelete} setTodo={setTodos} todoAdd={todoAdd} />
        {isOpen && <Dialog open={isOpen} closedialog={closeDialog} />}
      </TodoWrap>
    </div>
  );
}

export default App;
