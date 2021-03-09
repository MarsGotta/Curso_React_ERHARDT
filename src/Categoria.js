import React, { useState, useRef, useEffect } from 'react';

const Categoria = ({item}) => {

    return (
        <li key={item.key} className="categoria">
            <p>{item.name}</p>
        </li>
    )
}

export default Categoria;