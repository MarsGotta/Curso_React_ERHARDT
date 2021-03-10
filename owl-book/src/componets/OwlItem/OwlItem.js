import OwlIcon from '../OwlIcon/OwlIcon'
import OwlRating from '../OwlRating/OwlRating'
import './OwlItem.css';

function OwlItem({ src, title, author, stars, liked, genre }) {
  return (
    <article>
      <img src={src} alt={title} />
      <h4>{title}</h4>
      <h5>{author}</h5>
      <div><OwlRating stars={stars} /></div>
      <OwlIcon name="heart" liked={liked} stroke="aliceblue" />
      <p>Género: {genre}</p>
    </article>
  );
}

export default OwlItem;
