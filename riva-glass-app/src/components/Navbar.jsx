import "./Navbar.css"
import {NavLink} from "react-router-dom"
import {RxHamburgerMenu} from "react-icons/rx"
import { useState } from "react"

const Navbar = () => {
  const[showMenu,setShowMenu]=useState(true)
  return (
      <nav>
        <div className="navigation">
          <div className="nav-header">
            <p className="logo">Riva Glass</p>
            <button onClick={()=>setShowMenu(!showMenu)} className="button">
            <RxHamburgerMenu/>
            </button>
          </div>
          <div className={`${showMenu?"nav-list hide":"nav-list show"}`}>
            <NavLink className="link" to="/">Úvod</NavLink>
            <NavLink className="link" to="reservation">Rezervace</NavLink>
            <NavLink className="link" to="about">O nás</NavLink>
            <NavLink className="link" to="gallery">Fotogalerie</NavLink>
            <NavLink className="link" to="contacts">Kontakty</NavLink>
          </div>
        </div>
      </nav>
  )
}

export default Navbar