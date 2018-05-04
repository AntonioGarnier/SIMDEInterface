import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from '../Reducers'
import { saveState, loadState } from './LocalStorage'


const initialState = loadState() || { user: null }
console.log('InitialState:')
console.log(initialState)

export const lol = ''
export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger)
)

store.subscribe(() => {
    console.log('SUBSCRIBED!')
    console.log(store.getState())
    saveState(store.getState())
})
