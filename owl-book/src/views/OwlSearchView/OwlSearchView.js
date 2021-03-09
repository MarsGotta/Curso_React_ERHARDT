import { useUpdateDocumentTitle } from '../../core';
import './OwlSearchView.css';

function OwlSearchView() {
  useUpdateDocumentTitle('Busqueda');
  return (
    <main>
      Soy el search
    </main>
  );
}

export default OwlSearchView;
