import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row justify-between items-center mb-3 py-3 px-3">
        <p className="font-[Yellowtail] text-6xl">Riva Glass</p>
        <NavLink className="hover:bg-[#4FA1C2] mr-[20px] text-xl font-semibold py-2 px-4 rounded-lg" to="/">Galerie a obchod</NavLink>
        <NavLink className="hover:bg-[#4FA1C2] mr-[20px] text-xl font-semibold py-2 px-4 rounded-lg" to="reservation">Rezervace</NavLink>
        <NavLink className="hover:bg-[#4FA1C2] mr-[20px] text-xl font-semibold py-2 px-4 rounded-lg" to="about">O nás</NavLink>
        <NavLink className="hover:bg-[#4FA1C2] mr-[20px] text-xl font-semibold py-2 px-4 rounded-lg" to="gallery">Fotogalerie</NavLink>
        <NavLink className="hover:bg-[#4FA1C2] mr-[20px] text-xl font-semibold py-2 px-4 rounded-lg" to="contacts">Kontakty</NavLink>
      </nav>
    </header>
  )
}

export default Navbar