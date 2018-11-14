import React from 'react'
import { Link } from 'react-router-dom';

const Nav = (props) => {
  // const loggedIn = true
  return (
    <nav>
      <Link to='/Courses'>Courses</Link><br />
      <Link to='/'>App</Link>
    </nav>
  )
}


export default Nav
