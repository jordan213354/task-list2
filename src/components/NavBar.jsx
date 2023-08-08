import React from 'react';
import {Link} from 'react-router-dom'

 function NavBar  ()  {
  return (
    <div>
      <nav className='nav-cont' >
        <ul className='nav-list' >
          <Link to={"/"}><li>Inicio</li></Link>
          <Link to={"/sobre-nosotros"}><li>Sobre Nosotros</li></Link>
          <Link to={"/tareas"}><li>Tareas</li></Link>
        </ul>
      </nav>
    </div>
  )
}
export default NavBar;