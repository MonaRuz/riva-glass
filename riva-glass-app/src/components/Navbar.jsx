import "./Navbar.css"
import {NavLink, Link} from "react-router-dom"
import {RxHamburgerMenu} from "react-icons/rx"
import { useState } from "react"
import logo from "../images/Riva_glass_logo.png"

const Navbar = () => {
  const[showMenu,setShowMenu]=useState(true)
  console.log(logo);
  return (
      <nav>
        <div className="navigation">
          <div className="nav-header">
            <Link to={"/"}>
              <img src={logo}  className="logo"></img>
            </Link>
            <button onClick={()=>setShowMenu(!showMenu)} className="button">
            <RxHamburgerMenu/>
            </button>
          </div>
          <div className={`${showMenu?"nav-list hide":"nav-list show"}`}>
            <NavLink className="link" to="/">Úvod</NavLink>
            <NavLink className="link" to="glass-shop">Obchod</NavLink>
            <NavLink className="link" to="gallery">Galerie</NavLink>         
            <NavLink className="link" to="reservation">Rezervace</NavLink>
            <NavLink className="link" to="about">O nás</NavLink>
            <NavLink className="link" to="photo-gallery">Fotogalerie</NavLink>
            <NavLink className="link" to="contacts">Kontakty</NavLink>
          </div>
        </div>
      </nav>
  )
}

export default Navbar