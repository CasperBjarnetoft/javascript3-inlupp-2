import React from 'react'

const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container ">
      <header className='fs-3 fw-bold'>My Events</header>

        <div className='d-flex align-items-center'>
          <button className='btn btn-dark me-3'>Add Event</button>
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
                <a className="dropdown-item" href="/">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </nav>
  )
}

export default Navbar