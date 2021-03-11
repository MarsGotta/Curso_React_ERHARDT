import { useState } from 'react';
import GifMini from '../gif/GifMini'
import './lista.css';

function Lista({listaGifs, listaCategorias}){
    const [filterList, setFilterList] = useState(listaGifs);

    const handleClick = name => {
        const listFiltered = [...listaGifs].filter((item) => (item.categoria === name) && item);
        setFilterList(listFiltered);
      }

    return (
    <>  
        <div class="row">
            <ul className="listaCategorias">
                {listaCategorias.map(({ id, name }, key) => {
                return <li key={key} className="elementoCategoria">
                    <a onClick={() => handleClick(name)}>{name}</a>
                </li>
                })}
            </ul>
        </div>
        <div class="row listaGifs">
            {filterList.map((item, key) => {
            const { name, url, categoria} = item
            return <GifMini key={key} name={name} url={url} categoria={categoria} />
            })}
        </div>
    </>);
}

export default Lista;