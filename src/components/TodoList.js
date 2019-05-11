import React, {Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{
    render(){
        console.log(this.props);
        const {
            items,
            clearList,
            handleDelete,
            handleEdit
            } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {items.map(item => {
                return (
                  <TodoItem
                    key={item.id}
                    title={item.title}
                    handleDelete={() => handleDelete(item.id)}
                    handleEdit={() => handleEdit(item.id)}
                  />
                );
            })}
                <button
                type="submit"
                onClick={clearList}
                className="text-uppercase text-center btn btn-danger btn-block"
                >
                clear list
                </button>
            </ul>
        );
    }
}
export default TodoList;