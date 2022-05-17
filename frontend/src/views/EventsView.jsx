import { Children, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Event from '../components/event'
import Loader from '../components/loader/Loader'
import { getEvents } from '../store/actions/eventsAction'

const EventsView = () => {

  const dispatch = useDispatch()
  const { loading, error, data: events } = useSelector(state => state.events)

  const sortedevents = events.sort((a, b) => {
    const date1 = new Date(a.date)
    const date2 = new Date(b.date)
    const first = date1.getTime()
    const second = date2.getTime()

    return first - second
  })

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className='mt-3'>
      { loading && <Loader />}
      { error && <p>{error}</p>}
      { sortedevents.map(event => <Event key={event._id} event={event} />)}
    </div>

  )
}

export default EventsView