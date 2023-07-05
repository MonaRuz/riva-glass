import "./About.css"
import image1 from "../images/jpeg-optimizer_sklo_12.jpg"

const About = () => {
  return (
    <section className="section-about">
      <h1>Kdo jsme?</h1>
      <p>
        Naše firma RIVA GLASS byla založena v roce 2003, ve sklářském městě Nový Bor. Toto město je neodmyslitelně spjato s dlouholetou sklářskou tradicí, stejně jako naše rodina, jejíž sklářské kořeny sahají až do roku 1947.
      </p>
      <p>
        V současné době se zaměřujeme na maloobchodní prodej v naší prodejně a také vyvážíme sklo do celéko světa. Spolupracujeme s mnoha sklářskými závody a rafinériemi, se kterými realizujeme naše návrhy a zároveň nabízíme jejicj vastní produkci.
      </p>
      <p>
        Sklo je naší láskou, protože každý opravdový sklář má v srdci kousek skla. Proto také provozujeme Galerii sklářských řemesel, zaměřenou na dekoraci skla.
      </p>
      <img src={image1} alt="" />
    </section>
  )
}

export default About