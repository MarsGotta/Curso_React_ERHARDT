import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";

  
const DetalleLibro = () => {
    const [article, setArticle] = useState(undefined);
    let { contentId } = useParams()
    const history = useHistory()

    useEffect(() => {
        Liferay.Util.fetch(
            `/o/headless-delivery/v1.0/structured-contents/${contentId}`, {
                headers: {
                    'Accept': 'application/json'
                },
                method: 'GET'
            }
        )
        .then((response) => response.json()) 
        .then((data) =>  setArticle(data));
    }, [contentId]);

    if(article == undefined){
        return (
            <div className="container">
                <div onClick={() =>  history.goBack()}>Volver atrás</div>
                <div>Cargando</div>
            </div>
        )
    }
    else{
        const libro={};
        for (let contentField of article.contentFields) {
            switch (contentField.label) {
                case "Titulo":
                    libro.titulo=contentField.contentFieldValue.data;
                    break;
                case "Imagen":
                    libro.imagen=contentField.contentFieldValue.document.contentUrl;
                    break;
                case "Autor":
                    libro.autor=contentField.contentFieldValue.data;
                    break;
                case "Descripcion":
                    libro.descripcion=contentField.contentFieldValue.data;
                    break;
                default:
                    break;
            }
        }    
        return (
            <div className="container">
                <div onClick={() =>  history.goBack()}>Volver atrás</div>
                <h2>{libro.titulo}</h2>
                <img src={libro.imagen} />
                <p>{libro.autor}</p>
                {article.taxonomyCategoryBriefs.map(category => {
                    return (<span>{category.taxonomyCategoryName}</span>)
                }
                )}
                <div dangerouslySetInnerHTML={{ __html: libro.descripcion }} />
            </div>
        )
    }
}

export default DetalleLibro;