import { useState, useEffect } from 'react';
import GifMini from '../gif/GifMini'
import './lista.css';

function Lista({listaGifs, listaCategorias}){
    const [filterList, setFilterList] = useState(listaGifs);
    useEffect(() => { setFilterList(listaGifs)}, [listaGifs] )

    const handleClick = name => {
        const listFiltered = [...listaGifs].filter((item) => (item.categoria === name) && item);
        if(name === "Todos"){
            setFilterList(listaGifs);
        }else {
            setFilterList(listFiltered);
        }
        
      }
    
    
    return (
    <>  
        
        <div class="row">
            <div class=" center">
                <ul className="listaCategorias">
                    {listaCategorias.map(({ id, name }, key) => {
                    return <li key={key} className="elementoCategoria">
                        <a onClick={() => handleClick(name)}>{name}</a>
                    </li>
                    })}
                </ul>
            </div>
        </div>
        
        <div class="row listaGifs">
            {filterList.map((item, key) => {
            const { id, name, url, categoria} = item
            return <GifMini key={key} name={name} url={url} categoria={categoria} id={id} />
            })}
        </div>
        
    </>);
}

export default Lista;