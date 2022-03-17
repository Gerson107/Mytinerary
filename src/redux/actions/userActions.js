import axios from 'axios';

const userActions = {
    signUpUser: (userData) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/v1/auth/signUp', {userData})
            console.log(res.data.message)
            dispatch({type: 'message', payload:{ view: true,
                message: res.data.message,
                success: res.data.success
                }});
        }
    },

    signInUser: (logedUser) => {
        return async (dispatch, getState) => {
            const user = await axios.post('http://localhost:4000/api/v1/auth/signIn', {logedUser})
            console.log(user.data)
            if(user.data.success){
                localStorage.setItem('token', user.data.response.token)
                dispatch({type: 'user', payload: user.data.response.userData});
            }
            dispatch({type: 'message',
            payload: {view: true,
            message: user.data.message,
            success: user.data.success}});
        }
    },

    signOutUser: (closeUser) => {
        return async (dispatch, getSate) => {
           // const user = await axios.post('http://localhost:4000/api/v1/auth/signOut', {closeUser})
           // console.log(user)
            localStorage.removeItem('token')
            dispatch({type: 'user', payload: null});
        }
    },

    VerificarToken: (token) => {

        return async (dispatch, getState) => {
            console.log(token)
            const user = await axios.get('http://localhost:4000/api/v1/auth/signInToken', {
                headers: {
                    'Authorization' : 'Bearer ' + token
                }
            })
            console.log(user)
            
            if (user.data.success) {
                dispatch({ type: 'user', payload: user.data.response });
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                });
            } else {
                localStorage.removeItem('token')
            }

        }
    }
}
export default userActions;