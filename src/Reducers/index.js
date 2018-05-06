import {
    USER_LOGIN,
    USER_LOGOUT,
} from '../Constants'


export const initialState = {
    user: null,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, user: action.payload }
        case USER_LOGOUT:
            return { initialState }
        default:
            return state
    }
}
