import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Link to="/reservation">Rezervace</Link>
    </div>
  )
}

export default Home