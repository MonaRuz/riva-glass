import "./Contacts.css"
import {FiMail,FiPhone} from "react-icons/fi"
import image1 from "../images/jpeg-optimizer_sklo_8.jpg"

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
      <div className="opening-hours">
        <h2>Otevírací doba:</h2>
        <p>Po 09:00-17:00</p>
        <p>Po dohodě si lze domluvit termín i čas mimo pevně stanovenou otevíraci dobu.<br/> Stačí nás kontaktovat.</p>
      </div>
      <img src={image1} alt="" />
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
    </section>
  )
}

export default Contacts