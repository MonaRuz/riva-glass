import {FiMail,FiPhone} from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="text-sky-800">
      <div className="flex flex-row justify-center">
        <FiMail className="inline-block text-2xl"/>
          <a href="mailto:rivaglass@seznam.cz" className="mr-6 pl-3">rivaglass@seznam.cz</a>
        <FiPhone className="inline-block text-2xl"/>
          <a href="tel:+420 777 318 949" className="pl-3">+420 777 318 949</a>
      </div>
      <p className="text-center pr-6">&copy; Monaly</p>
    </footer>
  )
}

export default Footer