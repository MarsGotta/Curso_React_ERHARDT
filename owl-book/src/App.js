import { useEffect, useState } from 'react';
import OwlTabList from './componets/OwlTabList/OwlTabList';
import OwlLiteList from './componets/OwlLiteList/OwlLiteList';
import { genreList, bookList } from './mocks';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setList(bookList);
    setGenres(genreList)
  }, [list, genres])

  return (
    <main className="App">.
      <h2>Grandes clásicos para ti</h2>
      <OwlTabList genreList={genres} bookList={list}/>
      <OwlLiteList bookList={list} />
    </main>
  );
}

export default App;
