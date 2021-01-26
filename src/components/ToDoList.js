import React from 'react';
import { connect } from 'react-redux';
import ToDoListItem from './ToDoListItem';
import NewToDoForm from './NewToDoForm';
import { removeTodo, markTodoAsCompleted } from '../actions/actions';

const ToDoList = ({ todos, onRemovePressed, onCompletedPressed }) => {
    return (
        <div className="list-wrapper ui container">
            <div style={{ width: '500px', margin: '0 auto', marginTop: '80px' }}>
                <NewToDoForm />
                {
                    todos.map((todo, id) => <ToDoListItem 
                    key={id} todo={todo} 
                    onRemovePressed={onRemovePressed} 
                    onCompletedPressed={onCompletedPressed} 
                    />)
                }
            </div>            
        </div>
    );
}

const mapStateToProps = state => ({ 
    todos: state.todolist,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);