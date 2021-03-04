import './AmazonTabList.css';
import { generos, productList } from './mocks.js';

function AmazonTabList() {

  return (
    <>
      <ul>
        {generos.map(genero => {
          return <li key={genero.id}>{genero.nombre}</li>
        })}
      </ul>

      <div>
        {productList.map(producto => {
          return <li key={producto.id}>{producto.name}</li>
        })}
      </div>
    </>
  );
}

export default AmazonTabList;
