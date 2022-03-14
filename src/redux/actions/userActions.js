import axios from 'axios';

const userActions = {
    signUpUser: (userData) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/v1/auth/signUp', {userData})
            console.log(res.data)
            dispatch({type: 'message', payload: res.data});
        }
    },
    signInUser: (logedUser) => {
        return async (dispatch, getState) => {
            const user = await axios.post('http://localhost:4000/api/v1/auth/signIn', {logedUser})
            console.log(user.data.message)
            if(user.data.success){
                dispatch({type: 'user', payload: user.data});
            }else{console.log(user.data.message)}
        }
    },
    signOutUser: (closeUser) => {
        return async (dispatch, getSate) => {
            const user = await axios.post('http://localhost:4000/api/v1/auth/signOut', {closeUser})
            dispatch({type: 'user', payload: null});
        }
    }
}
export default userActions;