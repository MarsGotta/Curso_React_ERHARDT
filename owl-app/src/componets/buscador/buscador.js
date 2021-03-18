import './buscador.css';
import OwlIcon from '../OwlIcon/OwlIcon'
import { useState } from 'react';
import GifMini from '../gif/gifMini' 

function Buscador({listaGifs, listaCategorias}) {
  const [filterList, setFilterList] = useState([]);

    const handleClick = name => {
        var findName = document.getElementById("buscadorInput").value;
        const listFiltered = [...listaGifs].filter((item) => findName.length > 0 && (item.name.toLowerCase().indexOf(findName)>=0) && item);
        setFilterList(listFiltered);
      }
      return (
        <>  
          <div className="center">
              <input id="buscadorInput" className="buscador" placeholder="Introduzca el gif a buscar"/>
              <button onClick={() => handleClick("emoj")} class="btn" ><OwlIcon name="search"/></button>
          </div>
            
            <div class="row listaGifs">
                {filterList.map((item, key) => {
                const { name, url, categoria} = item
                return <GifMini key={key} name={name} url={url} categoria={categoria} />
                })}
            </div>
        </>);    
}

export default Buscador;
