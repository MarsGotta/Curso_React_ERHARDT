import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
  
const DetalleLibro = ({configuration}) => {
    const [article, setArticle] = useState(undefined);
    let { contentId } = useParams()

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
    }, []);

    if(article == undefined){
        return (
            <div className="container">
                <Link to={'/'}>Volver a home</Link>
                <div>Cargando</div>
            </div>
        )
    }
    else{
        const libro={};
        console.log(article);
        for (let contentField of article.contentFields) {
            console.log(contentField);
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
                <Link to={'/'}>Volver a home</Link>
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