import "./GlassShop.css"
import {Link} from "react-router-dom"
import image1 from "../images/jpeg-optimizer_sklo_vanocni_6.jpg"
import image2 from "../images/jpeg-optimizer_sklo_3.jpg"
import image3 from "../images/jpeg-optimizer_sklo_13.jpg"

const GlassShop = () => {
  return (
    <section className="section-shop">
      <h1>Prodejna skla Riva Glass</h1>
      <p>
      V současné době se zaměřujeme na maloobchodní prodej v naší prodejně a také vyvážíme sklo do celéko světa. Spolupracujeme s mnoha sklářskými závody a rafinériemi, se kterými realizujeme naše návrhy a zároveň nabízíme jejicj vastní produkci. V případě zájmu nás neváhejte navštívit nebo kontaktovat prostřednictvím kontaktů zde:
      </p>
      
      <Link className="reservation-button" to="/contacts">Kontakty</Link>
      <p>Otevírací doba: Po 9:00-17:00 <br/> (Pokud nás kontaktujete, můžeme se domluvit i na jiném dni či času)</p>
      <p>Na této sekci se stále pracuje...</p>
      <div className="images-container">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>

    </section>
  )
}

export default GlassShop