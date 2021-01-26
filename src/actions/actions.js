export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = (text) => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { text },
});

export const REQUEST_ROBOT_PENDING = 'REQUEST_ROBOT_PENDING';
export const REQUEST_ROBOT_SUCCESS = 'REQUEST_ROBOT_SUCCESS';
export const REQUEST_ROBOT_FAILED = 'REQUEST_ROBOT_FAILED';

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOT_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOT_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOT_FAILED }));
}

export const CHANGE_SEARCH_FIELD = 'REQUEST_CHANGE_SEARCH_FIELDROBOT_FAILED';
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text

})

export const REQUEST_ROBOT_DETAIL_PENDING = 'REQUEST_ROBOT_DETAIL_PENDING';
export const REQUEST_ROBOT_DETAIL_SUCCESS = 'REQUEST_ROBOT_DETAIL_SUCCESS';
export const REQUEST_ROBOT_DETAIL_FAILED = 'REQUEST_ROBOT_DETAIL_FAILED';

export const requestRobotDetail = (id) => (dispatch) => {
    dispatch({ type: REQUEST_ROBOT_DETAIL_PENDING });
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOT_DETAIL_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOT_DETAIL_FAILED }));
}

