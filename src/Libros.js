import React, { useState, useRef, useEffect } from 'react';
import Libro from "./Libro.js";
import { Link } from 'react-router-dom';

const Libros = ({configuration}) => {
    const structureId = configuration.portletInstance.structureId;
    const [articles, setArticles] = useState(undefined);

    useEffect(() => {
        Liferay.Util.fetch(
            `/o/headless-delivery/v1.0/content-structures/${structureId}/structured-contents`, {
                headers: {
                    'Accept': 'application/json'
                },
                method: 'GET'
            }
        )
        .then((response) => response.json()) 
        .then((data) =>  setArticles(data));
    }, []);

    if(articles == undefined){
        return (
            <div className="container">
                <Link to={'/'}>Volver a home</Link>
                <div>Cargando</div>
            </div>
        )
    }
    else{
        return (
            <div className="container">
                <Link to={'/'}>Volver a home</Link>
                <ul>
                {articles.items.map(item => {
                    return (<Libro item={item} />)
                }
                )}
                </ul>
            </div>
        )
    }
}

export default Libros;