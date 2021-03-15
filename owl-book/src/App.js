import { useEffect, useState } from 'react';
import './App.css';
import OwlLiteList from './componets/OwlLiteList/OwlLiteList';
import OwlTabList from './componets/OwlTabList/OwlTabList';
import {useAPI} from './core';

function App() {

  const [list, setList] = useState([]);
  const [genres, setGenres] = useState([]);

  const booksResponse = useAPI('http://localhost:4444/books');
  const genresResponse = useAPI('http://localhost:4444/genres');
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
    <main className="App">
      {renderLoading()}
      {renderMain()}
    </main>
  );
}

export default App;
