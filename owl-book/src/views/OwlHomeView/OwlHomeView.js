import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../core/theme-context';
import OwlTabList from '../../componets/OwlTabList/OwlTabList';
import OwlLiteList from '../../componets/OwlLiteList/OwlLiteList';
import { useUpdateDocumentTitle, useAPI } from '../../core';

import './OwlHomeView.css';

function OwlHomeView() {
  const contextTheme = useContext(ThemeContext);
  const [list, setList] = useState([]);
  const [genres, setGenres] = useState([]);

  useUpdateDocumentTitle('Home');
  const booksResponse = useAPI('http://localhost:4444/books')
  const genresResponse = useAPI('http://localhost:4444/genres')
  const booksData = booksResponse?.response;
  const genresData = genresResponse?.response;

  useEffect(() => {
    setList(booksData);
    setGenres(genresData)
  }, [booksData, genresData])

  const renderLoading = () => booksData?.isLoading && <p>Cargando...</p>;
  const renderMain = () => !booksData?.isLoading && (
    <>
      <h2>Grandes clásicos para ti</h2>
      <OwlTabList genreList={genres} bookList={list} />
      <OwlLiteList bookList={list} />
    </>
  )

  return (
    <main className={`home ${contextTheme}`}>
      {renderLoading()}
      {renderMain()}
    </main>
  );
}

export default OwlHomeView;
