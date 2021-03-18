import { useUpdateDocumentTitle } from '../../core';
import './ShopSearchView.css';

function ShopSearchView() {
  useUpdateDocumentTitle('Busqueda');
  return (
    <main>
      Buscador de piezas
    </main>
  );
}

export default ShopSearchView;
