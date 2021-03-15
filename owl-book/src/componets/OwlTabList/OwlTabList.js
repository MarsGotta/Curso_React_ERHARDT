import { useEffect } from 'react';
import OwlItem from '../OwlItem/OwlItem'
import './OwlTabList.css';

function OwlTabList({ genreList, bookList, filterId, filterList, onFilter }) {
  useEffect(() => {
    onFilter(filterId, bookList)
  }, [bookList])

  return (
    <>
      <ul>
        {genreList.map(({ id, name }, key) => {
          return <li key={key}>
            <button onClick={() => onFilter(id)}>{name}</button>
          </li>
        })}
      </ul>
      <div>
        {filterList.map((item, key) => {
          const { src, title, author, stars, liked, genreId, id } = item
          return <OwlItem key={key} src={src} title={title} author={author} stars={stars} liked={liked} genre={genreId} id={id} />
        })}
      </div>
    </>
  );
}

export default OwlTabList;
