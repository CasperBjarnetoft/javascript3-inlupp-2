import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../store/actions/authActions'
import { useNavigate } from "react-router-dom";

const RegisterView = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

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
    dispatch(register(formData))
    navigate("/events")
  }

  return (
    <div className='container mt-5 bg-light rounded'>
      <h2 className='text-center p-2'>Login</h2>
      <form className='p-1' onSubmit={handleSubmit}>
        <div className="form mb-4">
          <label className="form-label">firstname</label>
          <input type="text" value={formData.firstName} onChange={onChange} name="firstName" className="form-control" />
        </div>

        <div className="form mb-4">
          <label className="form-label">lastname</label>
          <input type="text"  value={formData.lastName} onChange={onChange} name="lastName" className="form-control"  />
        </div>
        <div className="form mb-4">
          <label className="form-label">Email</label>
          <input type="email" value={formData.email} onChange={onChange}  name="email"className="form-control" />
        </div>

        <div className="form mb-4">
          <label className="form-label">password</label>
          <input type="password" value={formData.password} onChange={onChange} name="password" className="form-control"  />
        </div>
        <button type="submit" className="btn btn-dark btn-block mb-4">Sign up</button>
      </form>
    </div>
  )
}

export default RegisterView