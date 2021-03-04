import OwlTabList from './componets/OwlTabList/OwlTabList';
import OwlLiteList from './componets/OwlLiteList/OwlLiteList';
import { genreList, bookList } from './mocks';
import './App.css';

function App() {
  return (
    <main className="App">.
      <h2>Grandes clásicos para ti</h2>
      <OwlTabList genreList={genreList} bookList={bookList}/>
      <OwlLiteList bookList={bookList} />
    </main>
  );
}

export default App;
