import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>
  <header>
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/fish'}>Fish</Link>
        </li>
        <li>
          <Link to={'/bugs'}>Bugs</Link>
        </li>
        <li>
          <Link to={'/villagers'}>Villagers</Link>
        </li>
      </ul>
    </nav>
  </header>

export default Navbar