import { useUpdateDocumentTitle } from '../../core';
import './OwlDetailView.css';

function OwlDetailView() {
  useUpdateDocumentTitle('Detalle');
  return (
    <main>
      Soy el detalle
    </main>
  );
}

export default OwlDetailView;
