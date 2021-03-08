import './AmazonListaProductos.css';
import React from 'react'
import { productos } from './mocks.js';

function AmazonListaProductos({ params }) {
  const { keyword } = params

  if (productos != undefined) {
    return (
      <div className="listaProductos">
        <ul>
          {Object.keys(productos)
            .filter(producto => productos[producto].nombre.includes(keyword))
            .map((key) => {
              return <li key={key}>{productos[key].nombre}</li>
            })
          }
        </ul>
      </div>
    );
  }
  else {
    return (<div></div>)
  }
}

export default AmazonListaProductos;
