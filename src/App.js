import "./App.css";
import React, { useState } from "react";
import TodoWrap from "./component/TodoWrap";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
function App() {
  //  input 초기값 주기
  const [todo, setTodo] = useState("");
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
      return; // 함수실행종료
    }
    // 새로운 객체 형태의 변수 생성 해서 빈배열에 집어넣기
    const newTodo = {
      id: todos.length,
      text: todo,
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

  return (
    <div className="App">
      <TodoWrap>
        <div>
          <h2>Todo - {todos.length}tasks</h2>
        </div>
        <TodoHead todoinsert={todoInsert} todocheck={todoCheck} todo={todo} />
        <TodoList todolist={todos} tododelete={todoDelete} setTodo={setTodos} />
        {todos.length > 9 && "모달팝업띄울예정"}
      </TodoWrap>
    </div>
  );
}

export default App;
