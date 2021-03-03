import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Libro = ({item}) => {

    const libro={};
    console.log(item);
    for (let contentField of item.contentFields) {
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
            default:
                break;
        }
    }

    return (
        <li key={item.key} className="libro">
            <Link to={`/libro/${item.id}`}>
                <h2>{libro.titulo}</h2>
            </Link>
            <img src={libro.imagen} />
            <p>{libro.autor}</p>
        </li>
    )
}

export default Libro;