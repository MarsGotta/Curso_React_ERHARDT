import React from 'react';
import Libro from "./Libro.js";

const ListLibros = ({articles}) => {
    return (
            <ul>
                {articles.items.map(item => {
                    return (<Libro item={item} />)
                }
                )}
            </ul>
    )
}

export default ListLibros;