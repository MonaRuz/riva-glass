import image1 from "../images/jpeg-optimizer_galerie_1.jpg"
import image2 from "../images/jpeg-optimizer_galerie_2.jpg"
import image3 from "../images/jpeg-optimizer_galerie_3.jpg"
import image4 from "../images/jpeg-optimizer_galerie_4.jpg"
import image5 from "../images/jpeg-optimizer_galerie_5.jpg"
import image6 from "../images/jpeg-optimizer_galerie_6.jpg"
import image7 from "../images/jpeg-optimizer_galerie_7.jpg"
import image8 from "../images/jpeg-optimizer_galerie_8.jpg"
import image9 from "../images/jpeg-optimizer_galerie_9.jpg"
import image10 from "../images/jpeg-optimizer_galerie_10.jpg"
import image11 from "../images/jpeg-optimizer_galerie_11.jpg"
import image12 from "../images/jpeg-optimizer_galerie_12.jpg"
import image13 from "../images/jpeg-optimizer_galerie_13.jpg"
import image14 from "../images/jpeg-optimizer_galerie_14.jpg"
import image15 from "../images/jpeg-optimizer_galerie_15.jpg"
import image16 from "../images/jpeg-optimizer_galerie_16.jpg"
import image17 from "../images/jpeg-optimizer_galerie_17.jpg"
import image18 from "../images/jpeg-optimizer_galerie_18.jpg"
import image19 from "../images/jpeg-optimizer_galerie_19.jpg"
import image20 from "../images/jpeg-optimizer_galerie_20.jpg"
import image21 from "../images/jpeg-optimizer_galerie_21.jpg"
import image22 from "../images/jpeg-optimizer_galerie_22.jpg"
import image23 from "../images/jpeg-optimizer_galerie_23.jpg"
import image24 from "../images/jpeg-optimizer_galerie_24.jpg"
import image26 from "../images/jpeg-optimizer_galerie_26.jpg"
import image27 from "../images/jpeg-optimizer_galerie_27.jpg"
import image28 from "../images/jpeg-optimizer_galerie_28.jpg"
import image29 from "../images/jpeg-optimizer_galerie_29.jpg"
import image30 from "../images/jpeg-optimizer_galerie_30.jpg"
import image31 from "../images/jpeg-optimizer_galerie_31.jpg"
import image32 from "../images/jpeg-optimizer_galerie_32.jpg"
import image33 from "../images/jpeg-optimizer_galerie_33.jpg"
import image34 from "../images/jpeg-optimizer_galerie_34.jpg"
import image35 from "../images/jpeg-optimizer_sklo_1.jpg"
import image36 from "../images/jpeg-optimizer_sklo_2.jpg"
import image37 from "../images/jpeg-optimizer_sklo_3.jpg"
import image38 from "../images/jpeg-optimizer_sklo_4.jpg"
import image39 from "../images/jpeg-optimizer_sklo_5.jpg"
import image40 from "../images/jpeg-optimizer_sklo_6.jpg"
import image41 from "../images/jpeg-optimizer_sklo_7.jpg"
import image42 from "../images/jpeg-optimizer_sklo_8.jpg"
import image45 from "../images/jpeg-optimizer_sklo_11.jpg"
import image46 from "../images/jpeg-optimizer_sklo_12.jpg"
import image47 from "../images/jpeg-optimizer_sklo_13.jpg"
import image48 from "../images/jpeg-optimizer_sklo_14.jpg"
import image49 from "../images/jpeg-optimizer_sklo_15.jpg"
import image50 from "../images/jpeg-optimizer_sklo_pilniky_1.jpg"
import image51 from "../images/jpeg-optimizer_sklo_vanocni_2.jpg"
import image52 from "../images/jpeg-optimizer_sklo_vanocni_3.jpg"
import image53 from "../images/jpeg-optimizer_sklo_vanocni_4.jpg"
import image54 from "../images/jpeg-optimizer_sklo_vanocni_5.jpg"
import image55 from "../images/jpeg-optimizer_sklo_vanocni_6.jpg"
import image56 from "../images/jpeg-optimizer_sklo_vanocni_7.jpg"
import image57 from "../images/jpeg-optimizer_sklo_vanocni_8.jpg"
import image58 from "../images/jpeg-optimizer_sklo_vanocni_9.jpg"

import "./PhotoGallery.css"

const PhotoGallery = () => {
	const imageArray = [
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
		image9,
		image10,
		image11,
		image12,
		image13,
		image14,
		image15,
		image16,
		image17,
		image18,
		image19,
		image20,
		image21,
		image22,
		image23,
		image24,
		image26,
		image27,
		image28,
		image29,
		image30,
		image31,
		image32,
		image33,
		image34,
		image35,
		image36,
		image37,
		image38,
		image39,
		image40,
		image41,
		image42,
		image45,
		image46,
		image47,
		image48,
		image49,
		image50,
		image51,
		image52,
		image53,
		image54,
		image55,
		image56,
		image57,
		image58,
	]

	return (
		<section className='section-galerry'>
			<div className='images-container'>
				{imageArray.map((onePhoto) => {
					return (
						<img
							className='image'
							src={onePhoto}
							key={onePhoto}
						>
						</img>
					)
				})}
			</div>
		</section>
	)
}

export default PhotoGallery
