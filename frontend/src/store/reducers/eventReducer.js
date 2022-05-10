import actiontypes from '../actiontypes'

const initState = {
  data: [],
  loading: false,
  error: null
}

const eventReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().event.loading:
      return {
        ...state,
        loading: action.payload
      }
    
    case actiontypes().event.setEvent:
      return {
        data: action.payload,
        loading: false,
        error: null
      }
    
    case actiontypes().event.failure:
      return {
        data: [],
        loading: false,
        error: action.payload
      }

    default: {
      return state
    }
  }
}

export default eventReducer;