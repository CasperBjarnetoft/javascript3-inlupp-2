import React from 'react'

const event = ({ event }) => {
  return (
    <div className='mt-2 m-auto'>
      <div className="card p-3 d-flex flex-row align-items-center justify-content-between">
        <h4>{ event.title }</h4>
        <div className='d-flex d-flex align-items-center'>
          <h6 className='me-3'>{event.date}</h6>
        </div>
      </div>
    </div>
  )
}

export default event