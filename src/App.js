import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
function App() {
  return (
    <div className="container">
      <div className="row">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
