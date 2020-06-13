import axios from 'axios'

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
    LOAD_ALL: 'LOAD_ALL',
    COMPLETE: 'COMPLETE'
}

axios.defaults.baseURL = 'http://localhost:5000/api'

export const fetchTodos = () => (dispatch) => {
    dispatch({ type: ACTION_TYPES.LOAD_ALL })
    axios.get('/todos')
        .then(res => dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: res.data
        }))
        .catch(error => console.log(error))
}

export const createTodo = (text) => (dispatch) => {
    axios.post('/todos', { text: text })
        .then(res => dispatch({
            type: ACTION_TYPES.CREATE,
            payload: res.data
        }))
        .catch(error => console.log(error))
}

export const deleteTodo = (todoId) => (dispatch) => {
    axios.post(`/todos/${todoId}`)
    .then(res => dispatch({
        type: ACTION_TYPES.DELETE,
        payload: res.data.todoId
    }))
    .catch(error => console.log(error))
}

export const updateTodo = (todoId) => (dispatch) => {
    axios.post(`/todos/${todoId}`)
    .then(res => dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: res.data.todoId
    }))
    .catch(error => console.log(error))
}

export const completeTodo = (todoId) => (dispatch) => {
    axios.post(`/todos/${todoId}/complete`)
    .then(res => dispatch({
        type: ACTION_TYPES.COMPLETE,
        payload: res.data.todoId
    }))
    .catch (error => console.log(error))
}