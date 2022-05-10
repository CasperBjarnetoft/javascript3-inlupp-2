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
    }
  }
}

export default actiontypes;