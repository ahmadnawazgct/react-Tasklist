import React, { Component } from 'react';

class TodoInput extends Component{
    
    render(){
        const {item, handleChange, handleSubmit, editItem} = this.props;
        return(
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary">
                                <i className="fas fa-book" />

                            </div>
                        </div>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={item} 
                            onChange={handleChange}
                            />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary text-uppercase mt-3 btn-block">
                        add item
                        </button>
                </form>
            </div>
        )
    }
}
export default TodoInput;