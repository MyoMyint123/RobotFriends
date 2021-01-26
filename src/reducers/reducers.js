import { 
    CREATE_TODO, 
    REMOVE_TODO, 
    MARK_TODO_AS_COMPLETED,
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOT_PENDING,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAILED,
    REQUEST_ROBOT_DETAIL_PENDING,
    REQUEST_ROBOT_DETAIL_SUCCESS,
    REQUEST_ROBOT_DETAIL_FAILED    
} from "../actions/actions";


export const todos = (state = [], action) =>{
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

export const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
};

export const requestRobots = (state = initialStateRobots, action) => {
    switch(action.type) {
        case REQUEST_ROBOT_PENDING:
            return {...state, isPending: true}
        case REQUEST_ROBOT_SUCCESS:
            return {...state, robots: action.payload, isPending: false};
        case REQUEST_ROBOT_FAILED:
            return {...state, error: action.payload, isPending: false};        
        default:
            return state;
    }
};

export const initialStateSearch = {
    searchField: '',
};

export const searchRobots = (state = initialStateSearch, action) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload};        
        default:
            return state;
    }
};

export const initialStateRobotDetail = {
    isPending: false,
    error: '',
    data: "",
};

export const requestRobotDetail = (state = initialStateRobotDetail, action) => {
    switch(action.type) {
        case REQUEST_ROBOT_DETAIL_PENDING:
            return {...state, isPending: true}
        case REQUEST_ROBOT_DETAIL_SUCCESS:
            return {...state, data: action.payload, isPending: false};
        case REQUEST_ROBOT_DETAIL_FAILED:
            return {...state, error: action.payload, isPending: false};        
        default:
            return state;
    }
};
