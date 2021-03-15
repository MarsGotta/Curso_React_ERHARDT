import { useState } from 'react';
import './OwlTabList.css';
import OwlItem from '../OwlItem/OwlItem';

function OwlTabList({genreList, bookList}) {
    const [filterList, setFilterList] = useState(bookList);

    const handleClick = id => {
        const list = [...bookList].filter((item) => (item.genreId === id || id === 1) && item);
        setFilterList(list);
    }

    return (
        <>
            <ul className="tab">
                {genreList.map(({id, name}, key) => {
                    return  <li className="tab-link" key={key}>
                                <button onClick={() => handleClick(id)}>{name}</button>
                            </li>   
                })}
            </ul>
            <div className="container">
                <ul>
                    {filterList.map((item, key) => {
                        const {src, title, author, stars, liked, genreId} = item
                        return <OwlItem key={key} src={src} title={title} author={author} stars={stars} liked={liked} genero={genreId}/>
                    })}
                </ul>
            </div>
        </>
    );
}

export default OwlTabList;