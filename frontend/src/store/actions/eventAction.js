import axios from 'axios'
import actiontypes from '../actiontypes'

export const getEvent = (_id) => {
  return async dispatch => {
    dispatch(loading(true))
    try {
      const res = await axios.get('http://localhost:9999/api/events/' + _id)
      dispatch(setEvent(res.data))
    }
    catch(err) {
      dispatch(eventFailure(err.message))
    }
  }
}

const loading = (payload) => {
  return {
    type: actiontypes().event.loading,
    payload
  }
}

const setEvent = (event) => {
  return {
    type: actiontypes().event.setEvent,
    payload: event
  }
}

const eventFailure = (payload) => {
  return {
    type: actiontypes().event.failure,
    payload
  }
}