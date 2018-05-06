import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { rootReducer } from '../Reducers'
import { saveState, loadState } from './LocalStorage'


const initialState = loadState() || { user: null }
// console.log('InitialState:')
// console.log(initialState)

export const lol = ''
export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
)

store.subscribe(() => {
    // console.log('SUBSCRIBED!')
    // console.log(store.getState())
    saveState(store.getState())
})
