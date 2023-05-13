import {FiMail,FiPhone} from "react-icons/fi"

const Contacts = () => {
  return (
    <section className="max-h-[100vh] min-h-[550px]">
      <div className="mb-5">
        <div>
          <p className="text-center">Václav Růžička</p>
          <h2 className="text-center">RIVA GLASS</h2>
          <p className="text-center">Gen.Svobody 308</p>
          <p className="text-center">473 01   Nový Bor</p>
          <p className="text-center">IČO: 41322347</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex">
          <FiPhone className="mr-1 text-2xl"/>
          <a className="mr-5" href="tel:777 318 949">777 318 949</a>
        </div>
        <div className="flex">
          <FiMail className="mr-1 text-2xl"/>
          <a href="mailto:rivaglass@tiscali.cz">rivaglass@tiscali.cz</a>
        </div>
      </div>
      
    </section>
  )
}

export default Contacts