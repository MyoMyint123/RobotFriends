import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from "../actions/actions";


export const todolist = (state = [], action) =>{
    // console.log(state)
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            };
            return state.concat(newTodo)
        }
        case MARK_TODO_AS_COMPLETED: {
            const { text } = payload;

            return state.map(todo => {
                if(todo.text == text) {
                    return { ...todo, isCompleted: !todo.isCompleted };
                }
                return todo;
            });
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter( todo => todo.text !== text);
        }
        default:
            return state;
    }
}