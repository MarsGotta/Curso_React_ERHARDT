import { useHistory } from 'react-router-dom';
import OwlLikeButton from '../OwlLikeButton/OwlLikeButton'
import OwlRating from '../OwlRating/OwlRating'
import './OwlItem.css';

function OwlItem({ src, title, author, stars, liked, id, position = '' }) {
  const history = useHistory();
  function onNavigate(url) {
    history.push(url)
  }
  return (
    <article className={`${position} owl-item-box`}>
      <img className="owl-item-img" src={src} alt={title} onClick={() => onNavigate(`/detail/${id}`)} />
      <h4 className="owl-item-title" onClick={() => onNavigate(`/detail/${id}`)}>{title.substr(0, 20)}{title.length >= 20 && '...'}</h4>
      <h5 className="owl-item-sub-title">{author.substr(0, 15)}{author.length >= 15 && '...'}</h5>
      <OwlRating className="owl-item-rating" rating={stars} />
      <OwlLikeButton className="owl-item-icon" liked={liked} />
    </article>
  );
}

export default OwlItem;
