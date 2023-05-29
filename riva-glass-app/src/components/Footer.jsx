import "./Footer.css" 
import {FiMail,FiPhone} from "react-icons/fi"

const Footer = () => {
  return (
    <footer>
      <div className="footer-contacts">
        <FiMail className="footer-icon"/>
          <a href="mailto:rivaglass@seznam.cz">rivaglass@seznam.cz</a>
        <FiPhone className="footer-icon"/>
          <a href="tel:+420 777 318 949">+420 777 318 949</a>
      </div>
      <p className="footer-copy">&copy; Monaly</p>
    </footer>
  )
}

export default Footer