import React from 'react'
import { Link } from 'react-router-dom'

const event = ({ event }) => {
  return (
    <Link to={`/events/${event._id}`}>
      <div className="mt-4 card p-3 d-flex flex-row align-items-center justify-content-between text-dark">
        <h4>{ event.title }</h4>
        <div className='d-flex d-flex align-items-center'>
          <h6 className='me-3'>{event.date}</h6>
        </div>
      </div>
    </Link>
  )
}

export default event