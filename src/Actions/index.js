import auth from '../Components/FirebaseProvider'
import { removeState } from '../Store/LocalStorage'
import {
    USER_LOGIN,
    USER_LOGOUT,
} from '../Constants'


export function setUser(user) {
    return {
        type: USER_LOGIN,
        payload: user,
    }
}

export function logingOut() {
    return {
        type: USER_LOGOUT,
    }
}

export function login() {
    return () => {
        auth.signIn()
    }
}

export function logout() {
    return (dispatch) => {
        dispatch(logingOut())
        removeState()
        auth.signOut()
    }
}
