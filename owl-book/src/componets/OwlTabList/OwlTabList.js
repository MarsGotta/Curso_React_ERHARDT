import { useState, useEffect } from 'react';
import OwlItem from '../OwlItem/OwlItem'
import './OwlTabList.css';

function OwlTabList({ genreList, bookList }) {
  const [filterList, setFilterList] = useState(bookList);

  const handleClick = id => {
    const listFiltered = [...bookList].filter((item) => (item.genreId === id || id === 1) && item);
    setFilterList(listFiltered);
  }
  return (
    <>
      <ul>
        {genreList.map(({ id, name }, key) => {
          return <li key={key}>
            <button onClick={() => handleClick(id)}>{name}</button>
          </li>
        })}
      </ul>
      <div>
        {filterList.map((item, key) => {
          const { src, title, author, stars, liked, genreId } = item
          return <OwlItem key={key} src={src} title={title} author={author} stars={stars} liked={liked} genre={genreId} />
        })}
      </div>
    </>
  );
}

export default OwlTabList;
