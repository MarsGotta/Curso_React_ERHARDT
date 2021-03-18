import { useEffect, useState } from 'react';
import Lista from '../../componets/lista/lista';
import { useUpdateDocumentTitle, useAPI } from '../../core';

import './HomeView.css';

function HomeView() {
  const [gifs, setGifs] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const gifsResponse = useAPI('http://localhost:4444/gifs')
  const categoriasResponse = useAPI('http://localhost:4444/categorias')
  const gifsData = gifsResponse?.response;
  const categoriasData = categoriasResponse?.response;
  
  // useEffect(() => {
  //   setGifs(gifsData);
  //   setCategorias(categoriasData)
  // }, [])

  const renderLoading = () => gifsData?.isLoading && <p>Cargando...</p>;
  const renderMain = () => !gifsData?.isLoading && (
    <>
      
      <Lista listaGifs={gifsData} listaCategorias={categoriasData} />
      
    </>
  )

  return (
    <main className="App">
      {renderLoading()}
      {renderMain()}
    </main>
  );
}

export default HomeView;
