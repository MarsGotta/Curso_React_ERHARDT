import { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeContext } from '../../core/theme-context';
import { filterTabList } from '../../redux/actions'
import ShopTabList from '../../componets/ShopTabList/ShopTabList';
import ShopLiteList from '../../componets/ShopLiteList/ShopLiteList';
import { useUpdateDocumentTitle, useAPI } from '../../core';

import './ShopHomeView.css';

function ShopHomeView() {
  const contextTheme = useContext(ThemeContext);
  const { filterId, filterList } = useSelector(store => store.tabList);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [filament, setFilament] = useState([]);

  useUpdateDocumentTitle('Home');
  const partsResponse = useAPI('http://localhost:4444/parts')
  const filamentResponse = useAPI('http://localhost:4444/filament')
  const partsData = partsResponse?.response;
  const filamentData = filamentResponse?.response;

  useEffect(() => {
    setList(partsData);
    setFilament(filamentData)
  }, [partsData, filamentData])

  const renderLoading = () => partsData?.isLoading && <p>Cargando...</p>;
  const renderMain = () => !partsData?.isLoading && (
    <>
      <h2>Piezas recomendadas</h2>
      <ShopTabList
        filamentList={filament}
        partList={list}
        filterId={filterId}
        filterList={filterList}
        onFilter={(id) => dispatch(filterTabList({ id, list }))}
      />
      <ShopLiteList partList={list} />
    </>
  )

  return (
    <main className={`home ${contextTheme}`}>
      {renderLoading()}
      {renderMain()}
    </main>
  );
}

export default ShopHomeView;
