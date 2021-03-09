import React, { useState, useRef, useEffect } from 'react';
import Libro from "./Libro.js";
import { Link } from 'react-router-dom';
import Categorias from './Categorias.js';
import ListLibros from './ListLibros.js';

const Libros = ({configuration}) => {
    const structureId = configuration.portletInstance.structureId;
    const [articles, setArticles] = useState(undefined);
    const vocabularyId = configuration.portletInstance.vocabularyId;
    const [categories, setCategories] = useState(undefined);
    const [selectedCategory, setSelectedCategory] = useState({name: "Todos"});

    useEffect(() => {
        Liferay.Util.fetch(
            `/o/headless-admin-taxonomy/v1.0/taxonomy-vocabularies/${vocabularyId}/taxonomy-categories/`, {
                headers: {
                    'Accept': 'application/json'
                },
                method: 'GET'
            }
        )
        .then((response) => response.json()) 
        .then((data) =>  setCategories(data));

    }, [vocabularyId]);

    useEffect(() => {
        let url=`/o/headless-delivery/v1.0/content-structures/${structureId}/structured-contents`;
        if(selectedCategory.name!="Todos"){
            url=`/o/headless-delivery/v1.0/content-structures/${structureId}/structured-contents?search=${selectedCategory.name}`
        }
        
        Liferay.Util.fetch(
            url, {
                headers: {
                    'Accept': 'application/json'
                },
                method: 'GET'
            }
        )
        .then((response) => response.json()) 
        .then((data) =>  setArticles(data));

    }, [structureId, selectedCategory]);

    const handleClick = (item) => {
        console.log(item);
        setSelectedCategory(item);
    }

    console.log(categories);
    if(articles == undefined || categories == undefined){
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
                <Categorias categories={categories} onClickCategory={handleClick} selectedCategory={selectedCategory} />
                <ListLibros articles={articles} />
            </div>
        )
    }
}

export default Libros;