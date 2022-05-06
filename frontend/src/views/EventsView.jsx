import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Event from '../components/event'
import { getEvents } from '../store/actions/eventsAction'

const EventsView = () => {

  const dispatch = useDispatch()
  const { data: posts } = useSelector(state => state.events)

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className='mt-3'>
      { posts.map(event => <Event key={event._id} event={event} />)}
    </div>

  )
}

export default EventsView