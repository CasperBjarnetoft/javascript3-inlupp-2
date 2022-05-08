import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatepostView from './CreateeventView'
import EventsView from './EventsView'

const Views = () => {
  return (
    <Routes >
      <Route path='/' element={ <EventsView />} />
      <Route path='/addevent' element={ <CreatepostView />} />
    </Routes>
  )
}

export default Views