import './OwlItem.css'
import OwnIcon from '../OwlIcon/OwlIcon';

function OwlItem({src, title, author, stars, liked, genero}) {
    return (
        <article>
            <img src={src} alt={title}/>
            <h4>{title}</h4>
            <h5>{author}</h5>
            <p>Estrellas: {stars}</p>
            <OwnIcon name="heart" />
            <p>Género: {genero}</p>
        </article>
    );
}

export default OwlItem;