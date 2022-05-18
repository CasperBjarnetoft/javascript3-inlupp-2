import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatepostView from './CreateeventView'
import EventsView from './EventsView'
import EventdetailsView from './EventdetailsView'
import LoginView from './LoginView'
import RegisterView from './RegisterView'

const Views = () => {
  return (
    <Routes >
      <Route path='/' element={ <LoginView />} />
      <Route path='/events/:_id' element={ <EventdetailsView />} />
      <Route path='/addevent' element={ <CreatepostView />} />
      <Route path='/events' element={ <EventsView />} />
      <Route path='/register' element={ <RegisterView />} />
    </Routes>
  )
}

export default Views