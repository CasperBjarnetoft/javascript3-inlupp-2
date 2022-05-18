import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../store/actions/authActions'

const Navbar = () => {

  const dispatch = useDispatch()

  const token = useSelector(state => state.auth.token)

  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container ">
      <header className='fs-3 fw-bold'><Link to="/events" className='text-dark'>Events</Link></header>

        <div className='d-flex align-items-center'>

          { token ?
            (<>
            <button className='btn btn-dark me-3'><NavLink to="/addevent" className="nav-link text-light" >Add event</NavLink></button>
            <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="/"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                <li>
                  <Link className="dropdown-item" onClick={() => dispatch(logout())} to="/">Logout</Link>
                </li>
              </ul>
            </div>
            </>)
            : <></>
          }
        </div>
      </div>
  </nav>
  )
}

export default Navbar