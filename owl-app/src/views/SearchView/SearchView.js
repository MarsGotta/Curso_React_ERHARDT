import { useEffect, useState } from 'react';
import Buscador from '../../componets/buscador/buscador';
import { useUpdateDocumentTitle, useAPI } from '../../core';

import './SearchView.css';

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
  // }, [gifsData, categoriasData])

  const renderLoading = () => gifsData?.isLoading && <p>Cargando...</p>;
  const renderMain = () => !gifsData?.isLoading && (
    <>
      <Buscador listaGifs={gifsData} listaCategorias={categoriasData} />
      
      {/* <OwlTabList genreList={genres} bookList={list} />
      <OwlLiteList bookList={list} /> */}
      
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
