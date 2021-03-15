import { useHistory } from 'react-router-dom';
import OwlIcon from '../OwlIcon/OwlIcon'
import OwlRating from '../OwlRating/OwlRating'
import './OwlItem.css';

function OwlItem({ src, title, author, stars, liked, genre, id }) {
  const history = useHistory();
  function onNavigate(url) {
    history.push(url)
  }
  return (
    <article>
      <img src={src} alt={title} onClick={() => onNavigate(`/detail/${id}`)} />
      <h4 onClick={() => onNavigate(`/detail/${id}`)}>{title}</h4>
      <h5>{author}</h5>
      <div><OwlRating stars={stars} /></div>
      <OwlIcon name="heart" liked={liked} />
      <p>Género: {genre}</p>
    </article>
  );
}

export default OwlItem;
