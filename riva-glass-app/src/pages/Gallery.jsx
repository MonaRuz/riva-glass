import image1 from "../images/IMG_6270.jpg"
import image2 from "../images/IMG_6272.jpg"
import image3 from "../images/IMG_6276.jpg"
import image4 from "../images/IMG_6278.jpg"
import image5 from "../images/IMG_6280.jpg"
import image6 from "../images/IMG_6282.jpg"
import image7 from "../images/IMG_6284.jpg"
import image8 from "../images/IMG_6286.jpg"
import image9 from "../images/IMG_6288.jpg"
import image10 from "../images/IMG_6290.jpg"
import image11 from "../images/IMG_6293.jpg"
import image12 from "../images/IMG_6294.jpg"
import image13 from "../images/IMG_6298.jpg"
import image14 from "../images/IMG_6300.jpg"
import image15 from "../images/IMG_6302.jpg"
import image16 from "../images/IMG_6304.jpg"
import image17 from "../images/IMG_6306.jpg"
import image18 from "../images/IMG_6308.jpg"
import image19 from "../images/IMG_6310.jpg"
import image20 from "../images/IMG_6312.jpg"
import "./Gallery.css"


const Gallery = () => {
  const imageArray=[]
  imageArray.push(image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20)

  return (
    <section className="section-galerry">
      <div className="images-container">
        {imageArray.map((onePhoto)=>{
          return( 
          <img className="image" src={onePhoto} key={onePhoto}>{}</img>
          )
        })}
      </div>
    </section>
  )
}

export default Gallery