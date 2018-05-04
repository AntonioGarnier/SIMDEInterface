import { USER_LOGGED } from '../Constants'


export const a = ''
export const currentUser = user => ({
    type: USER_LOGGED,
    payload: user,
})
