import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
 class App extends Component {
      state = {
        items: [{ id: 1, title: "wake up" }, { id: 2, title: "make breakfast" }],
        id: uuid(),
        item: "",
        editItem: false
      };
          handleChange = () => {
            console.log("handle change");
          };
          handleSubmit = () => {
            console.log("handle submit");
          };
          clearList = () => {
            console.log("clear list");
          };

          handleEdit = id => {
            console.log(`handle edit ${id}`);
          };
        render() {
          console.log(this.state);
          return (
            <div className="container">
              <div className="row">
                <div className=".col-10 mx-auto col-md-8 mt-5">
                  <h3 className="text-capitalize text-center">todo input</h3>
                  <TodoInput />
                  <TodoList />
                </div>
              </div>
            </div>
          );
        }
      }

export default App;
