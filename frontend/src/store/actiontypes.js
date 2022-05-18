const actiontypes = () => {
  return {
    events: {
      setEvents: 'SET_EVENTS',
      loading: 'LOADING',
      failure: 'EVENT_FAILURE'
    },
    event: {
      setEvent: 'SET_EVENT',
      loading: 'LOADING',
      failure: 'EVENT_FAILURE',
    },
    auth: {
      loading: 'LOADING',
      authFailure: 'AUTH_FAILURE',
      authSuccess: 'AUTH_SUCCES',
      logout: 'LOGOUT'
    }
  }
}

export default actiontypes;