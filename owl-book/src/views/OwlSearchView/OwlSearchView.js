import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useUpdateDocumentTitle, useAPI } from '../../core';
import { searchAllList, headerSearchHide, headerSearchShow } from '../../redux/actions';
import OwlItem from '../../componets/OwlItem/OwlItem'
import OwlInputSearch from '../../componets/OwlInputSearch/OwlInputSearch'
import './OwlSearchView.css';

function OwlSearchView() {
  const { searchList, searchInput } = useSelector(store => store)
  const dispatch = useDispatch();
  const { search } = useParams();
  const { response } = useAPI('http://localhost:4444/books');
  useUpdateDocumentTitle('Busqueda');

  useEffect(() => {
    dispatch(searchAllList({ value: search, searchList: response }))
    dispatch(headerSearchHide())
    return () => dispatch(headerSearchShow())
  }, [response, search]);

  function onSearch(value) {
    dispatch(searchAllList({ value, searchList: response }))
  }

  return (
    <main className="owl-search-view">
      <section className="owl-search-view-search-box">
        <h1>Buscar:</h1>
        <OwlInputSearch value={searchInput} onClick={onSearch} />
      </section>
      {searchList.map((item, key) => {
        const actualSrc = `../${item?.src}`;
        const newItem = { ...item, src: actualSrc };
        return <OwlItem position="horizontal" key={key} {...newItem} />
      })}
      {searchList.length === 0 && searchInput !== '' && (
        <div>
          Búsqueda no encontrada
        </div>
      )}
    </main>
  );
}

export default OwlSearchView;
