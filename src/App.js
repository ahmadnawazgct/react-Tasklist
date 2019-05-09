import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
 class App extends Component {
  state = {
    items: [{ id: 1, title: "wake up" }, { id: 2, title: "make breakfast" }],
    id:uuid()
  };
  render(){
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    );
  }
  
}

export default App;
