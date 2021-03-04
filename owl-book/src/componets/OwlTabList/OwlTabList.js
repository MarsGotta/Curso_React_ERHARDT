import OwlItem from '../OwlItem/OwlItem'
import './OwlTabList.css';

function OwlTabList({genreList, bookList}) {
  return (
    <>
      <ul>
        {genreList.map((item, key) => {
          return <li key={key}>{item}</li>
        })}
      </ul>
      <div>
        {bookList.map((item, key) => {
          const { src, title, author, stars, liked, genre } = item
          return <OwlItem key={key} src={src} title={title} author={author} stars={stars} liked={liked} genre={genre} />
        })}
      </div>
    </>
  );
}

export default OwlTabList;
