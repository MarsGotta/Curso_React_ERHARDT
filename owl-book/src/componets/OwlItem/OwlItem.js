import './OwlItem.css'
import OwnIcon from '../OwlIcon/OwlIcon';

function OwlItem({src, title, author, stars, liked, genero}) {
    return (
        <li>
            <div className="inner">
                <img src={src} alt={title} className="card-img"/>
                <h4>{title}</h4>
                <p>{author}</p>
                <p>Estrellas: {stars}</p>
                <OwnIcon name="heart" />
                <p>Género: {genero}</p>
            </div>
        </li>
    );
}

export default OwlItem;