import ShopIcon from '../ShopIcon/ShopIcon'
import ShopRating from '../ShopRating/ShopRating'
import './ShopItem.css';
import { useAPI } from '../../core';
import { useEffect } from 'react';

function ShopItem({ src, title, author, stars, liked, filament }) {
  const materialList = useAPI('http://localhost:4444/filament')
  var material = null;

  useEffect(() => {
    getMaterial()
  });

  function getMaterial(){
    console.log(materialList);
    material = materialList?.response.filter(mat => {
      return mat.id === filament
    })[0];
    console.log(material?.name);
  }
 
  return (
    <article>
      <img src={src} alt={title} />
      <h4>{title}</h4>
      <h5>{author}</h5>
      <div><ShopRating stars={stars} /></div>
      <ShopIcon name="heart" liked={liked} stroke="aliceblue" />
      <p>Material: {material?.name}</p>
    </article>
  );
}

export default ShopItem;
