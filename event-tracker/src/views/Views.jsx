import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EventsView from './EventsView'

const Views = () => {
  return (
    <Routes >
      <Route path='/' element={ <EventsView />} />
    </Routes>
  )
}

export default Views