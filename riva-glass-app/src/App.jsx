import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Reservation from "./pages/Reservation"
import About from "./pages/About"
import PhotoGallery from "./pages/PhotoGallery"
import Contacts from "./pages/Contacts"
import ReservationDetail from "./pages/ReservationDetail"
import SharedLayout from "./pages/SharedLayout"
import Gdpr from "./pages/Gdpr"
import GlassShop from "./pages/GlassShop"
import Gallery from "./pages/Gallery"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="reservation" element={<Reservation/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="photo-gallery" element={<PhotoGallery/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="reservation-detail/:dateId" element={<ReservationDetail/>}/>
            <Route path="gdpr" element={<Gdpr/>}/>
            <Route path="glass-shop" element={<GlassShop/>}/>
            <Route path="gallery" element={<Gallery/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
