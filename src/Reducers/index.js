import {
    USER_LOGIN,
    USER_LOGOUT,
    OPEN_SIDE_BAR,
    CLOSE_SIDE_BAR,
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
        case OPEN_SIDE_BAR:
            return { ...state, toggleSideBar: action.payload }
        case CLOSE_SIDE_BAR:
            return { ...state, toggleSideBar: action.payload }
        default:
            return state
    }
}
