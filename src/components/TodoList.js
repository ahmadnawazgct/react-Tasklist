import React, {Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{
    render(){
        const {items, clearList,handelDelete, handleEdit } = this.props;
        return(
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {items.map((item)=>(
                    <TodoItem 
                        key={item.id} 
                        title={item.title}
                        onClick={clearList} 
                        handelDelete={()=>handelDelete(item.id)}
                        handleEdit={()=>handleEdit(item.id)} 
                    />
                ))}
                <button type="submit" className="text-uppercase text-center btn btn-danger btn-block">clear list</button>
            </ul>
        )
    }
}
export default TodoList;