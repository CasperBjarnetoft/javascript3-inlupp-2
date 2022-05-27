import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../store/actions/authActions'
import { useNavigate } from "react-router-dom";

const RegisterView = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  
  const errorsObj = { firstName: '', lastName: '', email: '', password: ''}
  const [errors, setErrors] = useState(errorsObj)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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
    if(formData.firstName === '') {
      errorObj.firstName = "Firstname is Required"
      error = true;
    }

    if(formData.lastName === '') {
      errorObj.lastName = "Lastname is Required"
      error = true;
    }

    if(formData.email === '') {
      errorObj.email = "Email is Required"
      error = true
    }

    if(formData.password === '') {
      errorObj.password = "Password is Required"
      error = true
    }

    setErrors(errorObj)

    if(!error) {
      dispatch(register(formData))
      navigate("/events")
    }
  }

  return (
    <div className='container mt-5 bg-light rounded'>
      <h2 className='text-center p-2'>Login</h2>
      <form className='p-1' onSubmit={handleSubmit}>
        <div className="form mb-4">
          <label className="form-label">firstname</label>
          <input type="text" value={formData.firstName} onChange={onChange} name="firstName" className="form-control" />
          {errors.firstName && <div className='text-danger'>{errors.firstName}</div>}
        </div>

        <div className="form mb-4">
          <label className="form-label">lastname</label>
          <input type="text"  value={formData.lastName} onChange={onChange} name="lastName" className="form-control"  />
          {errors.lastName && <div className='text-danger'>{errors.lastName}</div>}
        </div>
        <div className="form mb-4">
          <label className="form-label">Email</label>
          <input type="email" value={formData.email} onChange={onChange}  name="email"className="form-control" />
          {errors.email && <div className='text-danger'>{errors.email}</div>}
        </div>

        <div className="form mb-4">
          <label className="form-label">password</label>
          <input type="password" value={formData.password} onChange={onChange} name="password" className="form-control"  />
          {errors.password && <div className='text-danger'>{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-dark btn-block mb-4">Sign up</button>
      </form>
    </div>
  )
}

export default RegisterView