import "./Home.css"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <section className="home-section">
      <div className="introduction">
        <h1>Galerie sklářských řemesela a obchod se sklářskými výrobky</h1>
        <p className="mb-6 text-center">Nacházíte se v okolí Nového Boru a nevíte, na které zajímavé místo se podívat? Nacházíte se ve světoznámém sklářském městě, tak kam jinam se podívat, než do naší nově vzniklé galerie sklářského umění. Součástí galerie je i obchod se sklem, takže si můžete rovnou kousek sklářsjého umění odvézt i domů.Abychom předešli příliš velkým skupinám, doporučujeme si návštěvu předem zarezervovat.</p>
        <Link className="reservation-button" to="/reservation">Rezervovat</Link>
      </div>
      
      <div className="where-we-are">
        <h2>Kde nás najdete?</h2>
        <p>Gen. Svobody 308, Nový bor</p>
        <p>Obchod a galerie se nachází necelé 3 km od centra města, pěšky trvá cesta 45 minut. Pro dopravu můžete využít městské hromadné dopravy z autobusového nádraží,cílová zastávka je Havlíčkova.. Naše galerie je hned vedle této zastávky. Otevíracé dobu jsme přizpůsobili příjezdu autobusu.</p>
        <Link to="/contacts">
            <p className="map-link">Mapa zde</p>
        </Link>
      </div>
    </section>
  )
}

export default Home