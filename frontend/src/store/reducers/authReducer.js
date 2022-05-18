import actiontypes from "../actiontypes";

const initState = {
  token: null,
  loading: false,
  error: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().auth.loading:
      return {
        ...state,
        loading: action.payload
      }
    
    case actiontypes().auth.authFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    
    case actiontypes().auth.authSuccess:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        loading: false,
        error: null,
        token: action.payload
      }
    
    case actiontypes().auth.logout:
      localStorage.removeItem('token')
      return {
        ...state,
        loading: false,
        error: null,
        token: null
      }
    
    default:
      return state
  }
}

export default authReducer;