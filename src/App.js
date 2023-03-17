import "./App.css";
import React, { useState } from "react";
import TodoWrap from "./component/TodoWrap";
import TodoHead from "./component/TodoHead";
import List from "./component/List";
function App() {
  return (
    <div className="App">
      <TodoWrap>
        <h2>Todo</h2>
        <TodoHead />
        <List />
      </TodoWrap>
    </div>
  );
}

export default App;
