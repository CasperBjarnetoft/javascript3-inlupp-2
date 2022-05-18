import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Event from '../components/event'
import Loader from '../components/loader/Loader'
import { getEvents } from '../store/actions/eventsAction'

const EventsView = () => {

  const dispatch = useDispatch()
  const { loading, error, data: events } = useSelector(state => state.events)

  const [oldEvents, setOldEvents] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])

  
  useEffect(()=> {
    const sortedevents = events.sort((a, b) => {
      return Date.parse(a.date) - Date.parse(b.date)
    })
    let newEvts = sortedevents.filter(evt => Date.parse(evt.date) > Date.now())
    let oldEvts = sortedevents.filter(evt => Date.parse(evt.date) < Date.now()).reverse()

    setUpcomingEvents(newEvts)
    setOldEvents(oldEvts)

  }, [events])

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className='mt-3'>
      { loading && <Loader />}
      { error && <p>{error}</p>}
      { upcomingEvents.map(event => <Event key={event._id} event={event} />)}
    </div>

  )
}

export default EventsView