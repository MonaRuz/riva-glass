import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row justify-between items-center mb-3 py-3 px-3">
        <p className="font-[Yellowtail] text-6xl">Riva Glass</p>
        <NavLink className="mr-[20px] text-xl font-semibold p-2 rounded-lg" to="/">Galerie a obchod</NavLink>
        <NavLink className="mr-[20px] text-xl font-semibold p-2 rounded-lg" to="reservation">Rezervace</NavLink>
        <NavLink className="mr-[20px] text-xl font-semibold p-2 rounded-lg" to="about">O nás</NavLink>
        <NavLink className="mr-[20px] text-xl font-semibold p-2 rounded-lg" to="gallery">Galerie</NavLink>
        <NavLink className="mr-[20px] text-xl font-semibold p-2 rounded-lg" to="contacts">Kontakty</NavLink>
      </nav>
    </header>
  )
}

export default Navbar