import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Event from '../components/event'
import Loader from '../components/loader/Loader'
import { getEvents } from '../store/actions/eventsAction'

const EventsView = () => {

  const dispatch = useDispatch()
  const { loading, error, data: events } = useSelector(state => state.events)

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className='mt-3'>
      { loading && <Loader />}
      { error && <p>{error}</p>}
      { events.map(event => <Event key={event._id} event={event} />)}
    </div>

  )
}

export default EventsView