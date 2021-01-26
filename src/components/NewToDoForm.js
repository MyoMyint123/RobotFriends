import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions/actions';

const NewToDoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            onCreatePressed(e.target.value);
            setInputValue('');
        }
    };

    return (
        <div className="todo-item-container">
            <div className="ui form">
                <div className="field">
                    <div className="ui action input">
                        <input 
                            className="new-todo-form" 
                            type="text"
                            placeholder="Type your new todo here"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)} 
                            onKeyDown={handleKeypress}
                        />
                        <button 
                            className="new-todo-button ui button"
                            onClick={() => {
                                const isDuplicateText = todos.some(todo => todo.text === inputValue);
                                if(!isDuplicateText && inputValue != ''){
                                    onCreatePressed(inputValue);
                                    setInputValue('');
                                }
                            }}
                            > Create Todo </button>
                    </div>
                    
                </div>
            </div>  
        </div>

    );
};
    
const mapStateToProps = state => ({
    todos: state.todos,
});

const matDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, matDispatchToProps)(NewToDoForm);