import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addEvent } from '../store/actions/eventsAction'

const CreatepostView = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loading = useSelector(state => state.events.loading)

  const [addedEvent, setAddedEvent] = useState(false)

  const errorsObj = { title: '', description: '', date:''}
  const [errors, setErrors] = useState(errorsObj)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    let error = false;
    const errorObj = {...errorsObj}
    if (formData.title === '') {
      errorObj.title = "title is Required";
      error = true;
    }

    if (formData.description === '') {
      errorObj.description = "description is Required";
      error = true;
    }

    if (formData.date === '') {
      errorObj.date = "date is Required";
      error = true;
    }

    setErrors(errorObj)

    if(!error) {
      dispatch(addEvent(formData))
      setAddedEvent(true)
    }
    
  }

  useEffect(() => {
    if(!loading && addedEvent) {
      navigate('/events')
    }
  }, [loading, addedEvent, navigate])

  return (
    <div className='container mt-5 bg-light rounded'>
      <form  onSubmit={handleSubmit} className='p-4'>
        <div className="form mb-4">
          <label className="form-label">title</label>
          <input type="text" name="title" onChange={onChange} value={formData.title} className="form-control" />
          {errors.title && <div className='text-danger'>{errors.title}</div>}
        </div>

        <div className="form datetimepicker mb-4">
          <label className="form-label">Date and Time (year-month-date 00:00:00)</label>
          <input type="datetime-local" name="date" onChange={onChange} value={formData.date} className="form-control" id="datetimepickerExample" />
          {errors.date && <div className='text-danger'>{errors.date}</div>}
        </div>

        <div className="form mb-4">
          <label className="form-label">More information</label>
          <textarea className="form-control" name="description" onChange={onChange} value={formData.description} rows="4"></textarea>
          {errors.description && <div className='text-danger'>{errors.description}</div>}
        </div>

        <button type="submit" className="btn btn-dark btn-block mb-4">{ loading ? 'loading...' : 'Add event'}</button>
      </form>
    </div>
  )
}

export default CreatepostView