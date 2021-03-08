import './App.css';
import OwlHeader from './componets/OwlHeader/OwlHeader';
import Lista from './componets/lista/lista';
import Formulario from './componets/formulario/formulario';
import Buscador from './componets/buscador/buscador';
import GifMini from './componets/gif/gif';

function App() {
  return (
    <div className="App">
    <div><Buscador /></div>
    <div class="row">
      <GifMini name="Emojis" src="https://media0.giphy.com/media/3nbbQlUpGDdgA/giphy.gif?cid=ecf05e47pvw700q91scsriny3ibcflnmjavaw4ojt3k1o00p&rid=giphy.gif" />
      <GifMini name="Mano" src="https://i.giphy.com/media/X4bXyDUuoueJbDj2dH/giphy.webp" />
      <GifMini name="Mano" src="https://i.giphy.com/media/X4bXyDUuoueJbDj2dH/giphy.webp" />
      <GifMini name="Mano" src="https://i.giphy.com/media/X4bXyDUuoueJbDj2dH/giphy.webp" />
    </div>
    </div> 
    

  );
}

export default App;
