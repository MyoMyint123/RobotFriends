import React from 'react';

const ToDoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <div className="ui segment">
        
        
        <div className="ui grid">            
            <div className="row">
                <div className="column">
                    <h3 style={{textAlign: 'left'}}>{ todo.text }</h3>
                </div>
            </div>
            <div className="row">
                <div className="column"> 
                    <button 
                        onClick={() => onRemovePressed(todo.text)}
                        className="ui red button remove-button right floated"
                    >Delete</button>
                    {
                        todo.isCompleted
                        ? <button 
                            onClick={() => {onCompletedPressed(todo.text)}}
                            className="ui green button completed-button right floated"
                        >Done</button>
                        : <button 
                            onClick={() => {onCompletedPressed(todo.text)}}
                            className="ui inverted green button right floated"
                            >Mark As Done</button>
                    }
                </div>
            </div>
        </div>
    </div>
);

export default ToDoListItem;