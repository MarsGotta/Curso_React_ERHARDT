import './buscador.css';
import OwlIcon from '../OwlIcon/OwlIcon'

function Buscador() {
  return ( 
      <div>
        <form>
          <input className="buscador" placeholder="Introduzca el gif a buscar"/>
          <button class="btn" ><OwlIcon name="search"/></button>
        </form>
        
      </div>
  );
}

export default Buscador;
