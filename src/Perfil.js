import React, { useState, useEffect } from 'react';
import Libro from "./Libro.js";
import { Link } from 'react-router-dom';

const Perfil = ({configuration}) => {
    const structureId = configuration.portletInstance.structureId;
    const [articles, setArticles] = useState(undefined);

    useEffect(() => {
        Liferay.Util.fetch(
            `/o/headless-delivery/v1.0/content-structures/${structureId}/structured-contents?filter=creatorId%20eq%20${Liferay.ThemeDisplay.getUserId()}`, {
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
            <div>
                <h2>Nombre de perfil: {Liferay.ThemeDisplay.getUserName()}</h2>
                <Link to={'/libros'}>Ir a todos los libros</Link>
            </div>
         )
    }
    else{
        return (
            <div className="container">
                <h2>Nombre de perfil: {Liferay.ThemeDisplay.getUserName()}</h2>
                {articles.totalCount > 0 ? (
                    <ul>
                        {articles.items.map(item => {
                            return (<Libro item={item} />)
                        }
                        )}
                    </ul>
                ) : ( <p>No tienes libros</p>) }
                <Link to={'/libros'}>Ir a todos los libros</Link>
            </div>
        )
    }
}

export default Perfil;