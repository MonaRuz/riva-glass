import "./Home.css"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <section className="home-section">
      <div className="introduction">
        <h1>Galerie sklářských řemesela a obchod se sklářskými výrobky</h1>
        <p className="mb-6 text-center">Nacházíte se v okolí Nového Boru a nevíte, na které zajímavé místo se podívat? Nacházíte se ve světoznámém sklářském městě, tak kam jinam se podívat, než do naší nově vzniklé galerie sklářského umění. Součástí galerie je i obchod se sklem, takže si můžete rovnou kousek sklářského umění odvézt i domů.Abychom předešli příliš velkým skupinám, doporučujeme si návštěvu předem zarezervovat. Rezervaci můžete provést po kliknutí na odkaz níže nebo si navštěvu zarezervovat v informačním centru Nového Boru. Vstupenky budou k zakoupení přímo na místě nebo v informačním centru Nového Boru</p>
        <Link className="reservation-button" to="/reservation">Rezervovat</Link>
      </div>
      
      <div className="where-we-are">
        <h2>Kde nás najdete?</h2>
        <p>Gen. Svobody 308, Nový bor</p>
        <p>Obchod a galerie se nachází necelé 3 km od centra města, pěšky trvá cesta 45 minut. Pro dopravu můžete využít městské hromadné dopravy, cílová zastávka je Havlíčkova.. Naše galerie se nachází hned vedle této zastávky.</p>
        <h2>Otevírací doba</h2>
        <p>Po a Pá 09:00-11:00</p>
      </div>
    </section>
  )
}

export default Home