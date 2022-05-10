import { useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getEvent } from '../store/actions/eventAction'
import Loader from '../components/loader/Loader'

const EventdetailsView = () => {

  const dispatch = useDispatch()
  const { _id } = useParams()

  const { loading, error, data: event } = useSelector(state => state.event)

  useEffect(() => {
    dispatch(getEvent(_id))
  }, [dispatch, _id])

  return (
    <div>
      { loading && <Loader />}
      { error && <p>{error}</p>}
      <div className="mt-4 card p-3">
          <div className='d-flex flex-row align-items-center justify-content-between text-dark'>
            <h4>{ event.title }</h4>
            <h6 className='me-3'>{event.date}</h6>
          </div>
          <div>
            <p>{ event.description }</p>
          </div>
      </div>
      
    </div>
  )
}

export default EventdetailsView