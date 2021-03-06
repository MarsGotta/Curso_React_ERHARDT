import './App.css';
import OwlLiteList from './componets/OwlLiteList/OwlLiteList';
import OwlTabList from './componets/OwlTabList/OwlTabList';
import {generosList, bookList, lastBookList} from './mocks';

function App() {
  return (
    <div className="App">
      <h2>Grandes clásicos para ti</h2>
      <OwlTabList generosList= {generosList} bookList={bookList}/>
      <OwlLiteList bookList={lastBookList} />
    </div>
  );
}

export default App;
