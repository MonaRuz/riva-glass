import "./Home.css"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <section className="home-section">
      <div className="introduction">
        <h1>Prodejna skla a galerie sklářských řemesel</h1>
        <p>Nacházíte se v okolí Nového Boru a nevíte, na které zajímavé místo se podívat? Nový Bor je světoznámé sklářské město, tak kam jinam se podívat, než do našeho obchodu se sklářskými výrobky a nově vzniklé galerie sklářského umění s možností komentované prohlídky.<br/> Pro děti je v ceně vstupného také malý skleněný dáreček.</p>
        <p>Abychom předešli příliš velkým skupinám, doporučujeme si návštěvu galerie předem zarezervovat. Rezervaci můžete provést po kliknutí na odkaz níže, v sekci rezervace, nebo si navštěvu zarezervovat v Turistickém informačním centru města Nový Bor.</p>
        <Link className="reservation-button" to="/reservation">Rezervovat návštěvu galerie</Link>
        <p>V našem obchodě máme širokou škálu sklářských výrobků.<br/> Pro bližší informace přejděte do sekce Obchod</p>
        <Link className="reservation-button" to="/glass-shop">Obchod</Link>
      </div>
      
      <div className="where-we-are">
        <h2>Kde nás najdete?</h2>
        <p>Gen. Svobody 308, Nový bor</p>
        <p>Obchod a galerie se nachází necelé 3 km od centra města, pěšky trvá cesta cca 45 minut, ale lze využít i autobusové dopravy. Cílová zastávka je Havlíčkova. Naše galerie se nachází hned vedle této zastávky v budově bývalé fabriky.</p>
        <h2>Otevírací doba</h2>
        <p>Každé pondělí 09:00-12:00 a 13:00-17:00</p>
        <p>Komentované prohlídky začínají každou celou hodinu:<br/> 10:00, 11:00, 13:00, 14:00, 15:00 a 16:00.</p>
        <p>Po dohodě si lze domluvit termín i čas mimo pevně stanovenou otevíraci dobu.<br/> Stačí nás kontaktovat zde:</p>
        <Link className="reservation-button" to="/contacts">Kontakty</Link>
      </div>
    </section>
  )
}

export default Home