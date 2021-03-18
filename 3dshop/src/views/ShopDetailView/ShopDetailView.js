import { useUpdateDocumentTitle } from '../../core';
import './ShopDetailView.css';

function ShopDetailView() {
  useUpdateDocumentTitle('Detalle');
  return (
    <main>
      Soy el detalle
    </main>
  );
}

export default ShopDetailView;
