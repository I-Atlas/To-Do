import { ACTION_TYPES } from "../Actions/Actions"

const initialState = {
    todos:[]
}


export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }

        case ACTION_TYPES.LOAD_ALL:
            return {
                ...state,
                loading: true
            }

        case ACTION_TYPES.CREATE:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === action.payload._id ? action.payload : todo)
            }

        case ACTION_TYPES.DELETE:
            return {
                ...state,
                todos:state.todos.filter(todo => todo._id !== action.payload)
            }

        case ACTION_TYPES.COMPLETE:
        return {
            ...state,
            todos: state.todos.map(todo => {
                if (todo._id === action.payload) return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
                return todo
            })
        }

        default:
            return state;
    }
}