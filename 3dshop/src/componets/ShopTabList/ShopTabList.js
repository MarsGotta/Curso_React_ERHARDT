import { useState, useEffect } from 'react';
import ShopItem from '../ShopItem/ShopItem'
import './ShopTabList.css';

function ShopTabList({ filamentList, partList, filterId, filterList, onFilter }) {

  useEffect(() => {
    onFilter(filterId, partList)
  }, [partList])

  return (
    <>
      <ul>
        {filamentList.map(({ id, name }, key) => {
          return <li key={key}>
            <button onClick={() => onFilter(id)}>{name}</button>
          </li>
        })}
      </ul>
      <div>
        {filterList.map((item, key) => {
          const { src, title, author, stars, liked, filamentId } = item
          return <ShopItem key={key} src={src} title={title} author={author} stars={stars} liked={liked} filament={filamentId} />
        })}
      </div>
    </>
  );
}

export default ShopTabList;
