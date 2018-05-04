import { USER_LOGGED } from '../Constants'


export const initialState = {
    user: null,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED:
            return { ...state, user: action.payload }
        default:
            return state
    }
}
