import "./Contacts.css"
import {FiMail,FiPhone} from "react-icons/fi"
import { MapContainer, TileLayer,Popup,Marker} from 'react-leaflet'

const Contacts = () => {
  return (
    <section className="section-contacts">
      <div className="contacts">
          <p>Václav Růžička</p>
          <h2>RIVA GLASS</h2>
          <p>Gen.Svobody 308</p>
          <p>473 01   Nový Bor</p>
          <p>IČO: 41322347</p>
      </div>
      <div className="icons">
        <div className="icon">
          <FiPhone className="icon"/>
          <a href="tel:777 318 949">777 318 949</a>
        </div>
        <div className="icon">
          <FiMail className="icon"/>
          <a href="mailto:rivaglass@tiscali.cz">rivaglass@tiscali.cz</a>
        </div>
      </div>
          <MapContainer className="leaflet-container" center={[50.7770194, 14.5428644]} zoom={11} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[50.7770194, 14.5428644]}>
              <Popup>
                  Galerie Riva Glass
              </Popup>
            </Marker>
          </MapContainer>
    </section>
  )
}

export default Contacts