import React, { useState, useEffect, useContext } from 'react';
import Libro from "./Libro";
import { Link } from 'react-router-dom';
import { ConfigurationContext } from './index';
const Perfil = () => {
    const [articles, setArticles] = useState(undefined);
    const [perfil, setPerfil] = useState(undefined);
    const configuration=useContext(ConfigurationContext);
    const structureId = configuration.portletInstance.structureId;
    console.log(configuration);
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
    }, [structureId]);

    useEffect(() => {
        Liferay.Util.fetch(
            `/o/headless-admin-user/v1.0/user-accounts/${Liferay.ThemeDisplay.getUserId()}`, {
                headers: {
                    'Accept': 'application/json'
                },
                method: 'GET'
            }
        )
        .then((response) => response.json()) 
        .then((data) =>  setPerfil(data));
    }, [Liferay.ThemeDisplay.getUserId()]);

    if(articles == undefined || perfil == undefined){
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
                <h2>{Liferay.ThemeDisplay.getUserName()} Tus libros</h2>
                <p>Tu email: {perfil.emailAddress}</p>
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