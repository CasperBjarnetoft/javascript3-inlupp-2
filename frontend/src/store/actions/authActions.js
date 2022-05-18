import axios from 'axios'
import actiontypes from '../actiontypes'

const apiCall = (url, user, dispatch) => {
  axios.post(url, user)
  .then(res => {
    console.log(res.data)
    dispatch(authSuccess(res.data.token))
  })
  .catch(err => dispatch(authFailure(err.message)))
}

export const login = user => {
  return dispatch => {
    dispatch(loading())
    apiCall("http://localhost:9999/api/users/login", user, dispatch)
  }
}

export const register = user => {
  return dispatch => {
    dispatch(loading())
    apiCall('http://localhost:9999/api/users/register', user, dispatch)
  }
}

export const checkUser = () => {
  return dispatch => {
    let token = localStorage.getItem('token')
    if(token) {
        dispatch(authSuccess(token))
    }
  }
}

export const logout = () => {
  return {
    type: actiontypes().auth.logout
  }
}

const loading = (payload) => {
  return {
    type: actiontypes().auth.loading,
    payload
  }
}

const authFailure = (err) => {
  return {
    type: actiontypes().auth.authFailure,
    payload: err
  }
}

const authSuccess = token => {
  return {
    type: actiontypes().auth.authSuccess,
    payload: token
  }
}