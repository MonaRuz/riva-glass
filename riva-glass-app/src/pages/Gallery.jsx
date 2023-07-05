import "./Gallery.css"
import { Link } from "react-router-dom"
import image21 from "../images/jpeg-optimizer_galerie_29.jpg"


const Gallery = () => {
	return (
		<div className='section-gallery'>
			<h1>Přijďte poznat sklářské umění v Novém Boru.</h1>
			<p>
				Nabízíme komentovanou prohlídku galerie sklářských řemesel, zejména z okolí Nového Boru.
			</p>
			<p>
				Abychom předešli příliš velkým skupinám, doporučujeme si návštěvu předem
				zarezervovat. Rezervaci můžete provést po kliknutí na odkaz níže.
			</p>
			<Link
				className='reservation-button'
				to='/reservation'
				>
				Rezervovat návštěvu galerie
			</Link>
			<p className="price">Cena vstupného je 40Kč</p>
			<p>
				Návštěvu si lze zarezervovat také v informačním centru Nového Boru, nebo
				se nám ozvěte prostřednictvím našich kontaktů:
			</p>
			<Link
				className='reservation-button'
				to='/contacts'
			>
				Kontakty
			</Link>
			<img className="image" src={image21} alt="" />
		</div>
	)
}

export default Gallery
