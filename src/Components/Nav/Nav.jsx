import React from 'react'
import {HashLink as Link} from "react-router-hash-link";


const Nav = () => {

  const navList = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Projects",
      href: "/projects"
    },
    {
      name: "About",
      href: "/about"
    }
  ] 
  
  return (
    <div className='Nav'>
        <h3>Nav</h3>
        <div className="navLinks">
        {navList.map((link) => {
          return(
            <li>
              <Link className="link" to={link.href}>{link.name}</Link>
            </li>
          )
        })}
        </div>
    </div>
  )
}

export default Nav;