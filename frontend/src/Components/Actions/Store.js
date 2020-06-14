import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducers } from '../Reducers/Reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store