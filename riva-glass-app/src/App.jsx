import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Reservation from "./pages/Reservation"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contacts from "./pages/Contacts"
import ReservationDetail from "./pages/ReservationDetail"
import SharedLayout from "./pages/SharedLayout"

const App = () => {
  return (
    <div className="bg-gradient-to-b from-sky-700 to-cyan-400 h-screen text-slate-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="reservation" element={<Reservation/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="reservation-detail/:dateId" element={<ReservationDetail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
