import OwlItem from '../OwlItem/OwlItem'
import './OwlLiteList.css';

function OwlLiteList({bookList}) {
  return (
    <section>
      <h2>Últimos libros</h2>
      <div>
        {bookList.map((item, key) => {
          const { src, title, author, stars, liked, genre } = item
          return <OwlItem key={key} src={src} title={title} author={author} stars={stars} liked={liked} genre={genre} />
        })}
      </div>
    </section>
  );
}

export default OwlLiteList;

