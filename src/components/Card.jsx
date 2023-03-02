import { Link } from 'react-router-dom';
import './card.css'

function Card({src , text, label , path}) {
  
  // console.log(src);
  return (
    <div className='trlv__cards-card'>
      <Link className='trvl__cards-card_link' to={path}>

        <div className="trlv__cards-card_image" data-category={label} >
          <img src={src} alt="img"  />
          
        </div>

        <div className="trlv__cards-card_content">
          <h5>{text}</h5>
        </div>

      </Link>

    </div>
  )
}

export default Card
