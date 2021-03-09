import React from 'react';
import Categoria from './Categoria.js'
const Categorias = ({categories, onClickCategory, selectedCategory}) => {
    return (
        <ul>
            <li key="0" className={selectedCategory.name=="Todos" ? "selected" : ""}>
                <p onClick={() => onClickCategory({name: "Todos"})}>Todos</p>
            </li>
            {categories.items.map(item => {
                const selected=selectedCategory.name==item.name;
                return (
                    <li key={item.key} className={selected ? "selected" : ""}>
                        <p onClick={() => onClickCategory(item)}>{item.name}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default Categorias;