import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/actions/authActions'

const LoginView = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const errorsObj = { email: '', password: ''}
  const [errors, setErrors] = useState(errorsObj)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    const errorsObj = { email: '', password: ''}
    if(formData.email === '') {
      errorsObj.email = "email is Required"
      error = true;
    }

    if(formData.password === '') {
      errorsObj.password = "password is Required"
      error = true;
    }

    setErrors(errorsObj)

    if(!error) {
      dispatch(login(formData))
      navigate("/events")
    }
  }

  return (
    <div className='container mt-5 bg-light rounded'>
      <h2 className='text-center p-2'>Login</h2>
      <form className='p-1' onSubmit={handleSubmit}>
        <div className="form mb-4">
          <label className="form-label">Email</label>
          <input type="email" value={formData.email} onChange={onChange} name="email"className="form-control" />
          {errors.email && <div className='text-danger'>{errors.email}</div>}
        </div>

        <div className="form mb-4">
          <label className="form-label">password</label>
          <input type="password" value={formData.password} onChange={onChange} name="password" className="form-control"  />
          {errors.password && <div className='text-danger'>{errors.password}</div>}
        </div>
        <p>Not a member? <Link className='link' to='/register'>register</Link></p>
        <button type="submit" className="btn btn-dark btn-block mb-4">Login</button>
      </form>
    </div>
  )
}

export default LoginView