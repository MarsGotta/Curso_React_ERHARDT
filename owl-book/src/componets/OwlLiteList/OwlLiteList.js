import OwlItem from '../OwlItem/OwlItem'
import './OwlLiteList.css';

function OwlLiteList({ bookList }) {
  return (
    <section className="owl-lite-list">
      <h2>Últimos libros</h2>
      <div>
        {bookList.map((item, key) => {
          const { src, title, author, stars, liked, genre, id, lastBook } = item
          return lastBook && <OwlItem
            key={key}
            src={src}
            title={title}
            author={author}
            stars={stars}
            liked={liked}
            genre={genre}
            id={id}
            position="horizontal"
          />
        })}
      </div>
    </section>
  );
}

export default OwlLiteList;

