import { useEffect, useState } from 'react';
import OwlItem from '../OwlItem/OwlItem'
import './OwlTabList.css';

function OwlTabList({ genreList, bookList, filterId, filterList, onFilter }) {
  const [genreSelected, setGenreSelected] = useState(1)
  useEffect(() => {
    onFilter(filterId, bookList)
  }, [bookList])

  function handleFilter(id) {
    setGenreSelected(id);
    onFilter(id)
  }

  return (
    <>
      <ul className="owl-tab-navigation">
        {genreList.map(({ id, name }, key) => {
          return <li key={key} className={genreSelected === id && 'active'}>
            <button className="owl-tab-button" onClick={() => handleFilter(id)}>{name}</button>
          </li>
        })}
      </ul>
      <div className="owl-tab-list">
        {filterList.map((item, key) => {
          const { src, title, author, stars, liked, genreId, id } = item
          return <OwlItem
            key={key}
            src={src}
            title={title}
            author={author}
            stars={stars}
            liked={liked}
            genre={genreId}
            id={id}
            position="vertical"
          />
        })}
      </div>
    </>
  );
}

export default OwlTabList;
