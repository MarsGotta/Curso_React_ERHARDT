import { useState } from 'react';
import './OwlTabList.css';
import OwlItem from '../OwlItem/OwlItem';

function OwlTabList({generosList, bookList}) {
    const [filterList, setFilterList] = useState(bookList);

    const handleClick = id => {
        const list = [...bookList].filter((item) => item.generoId === id && item);
        setFilterList(list);
    }

    const handleClear = () => {
        setFilterList(bookList);
    }

    return (
        <>
            <ul className="tab">
                {generosList.map(({id, name}, key) => {
                    return  <li className="tab-link" key={key}>
                                <button onClick={() => handleClick(id)}>{name}</button>
                            </li>   
                })}
                <li className="tab-link">
                    <button onClick={() => handleClear()}>Limpiar</button>
                </li>
            </ul>
            <div className="container">
                <ul>
                    {filterList.map((item, key) => {
                        const {src, title, author, stars, liked, generoId} = item
                        return <OwlItem key={key} src={src} title={title} author={author} stars={stars} liked={liked} genero={generoId}/>
                    })}
                </ul>
            </div>
        </>
    );
}

export default OwlTabList;