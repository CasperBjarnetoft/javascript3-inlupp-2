import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatepostView from './CreateeventView'
import EventsView from './EventsView'
import EventdetailsView from './EventdetailsView'

const Views = () => {
  return (
    <Routes >
      <Route path='/' element={ <EventsView />} />
      <Route path='/events/:_id' element={ <EventdetailsView />} />
      <Route path='/addevent' element={ <CreatepostView />} />
    </Routes>
  )
}

export default Views