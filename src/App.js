import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
 class App extends Component {
      state = {
        items: [],
        id: uuid(),
        item: "",
        editItem: false
      };
          handleChange = (e) => {
            this.setState({
              item:e.target.value
            })
          };
          handleSubmit = (e) => {
            e.preventDefault();
            const newItem={
              id:this.state.id,
              title:this.state.item
            }
            const updatedItem = [...this.state.item, newItem];
            this.setState({
              items:updatedItem,
              id:uuid(),
              item:'',
              editItem:false
            })
          }
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
                  <TodoInput 
                    item={this.state.item}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    eidtItem={this.state.eidtItem} />
                  <TodoList 
                    items={this.state.items}
                    clearList={this.clearList}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit} />
                </div>
              </div>
            </div>
          );
        }
      }

export default App;
