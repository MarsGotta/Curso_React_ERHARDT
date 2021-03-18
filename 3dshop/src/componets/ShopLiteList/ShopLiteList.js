import ShopItem from '../ShopItem/ShopItem'
import './ShopLiteList.css';

function ShopLiteList({partList}) {
  return (
    <section>
      <h2>Piezas nuevas</h2>
      <div>
        {partList.map((item, key) => {
          const { src, title, author, stars, liked, filamentId } = item
          return <ShopItem key={key} src={src} title={title} author={author} stars={stars} liked={liked} filament={filamentId} />
        })}
      </div>
    </section>
  );
}

export default ShopLiteList;
