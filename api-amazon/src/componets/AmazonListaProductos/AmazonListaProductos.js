import './AmazonListaProductos.css';
import React, {useState} from 'react'
import { productos, generos } from './mocks.js';
import AmazonHeader from '../AmazonHeader/AmazonHeader';
import AmazonSidebar from '../AmazonSidebar/AmazonSidebar'

function AmazonListaProductos({ params }) {
  const { keyword, genero } = params
  const [showSidebar, setShowSidebar] = useState(true)

  const handleClickSidebar = evt => {
    if(showSidebar){
      setShowSidebar(false);
    }else{
      setShowSidebar(true);
    }
  }

  if (productos != undefined) {
    if (genero != undefined && genero != null && genero != "" && genero != 'undefined'){ 
      let generoId = 0;  
      const generoFiltrado = generos.filter(g => g.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(genero));
      if (generoFiltrado != undefined && generoFiltrado != null && generoFiltrado.length > 0){
        generoId = generoFiltrado[0].id;
      }

      if (generoId == 0){
        return (
          <>
            <AmazonHeader onClickSidebarHeader={handleClickSidebar}/>
            {showSidebar && <AmazonSidebar generos={generos} />} 
            <div className="listaProductos">
              <ul>
                {Object.keys(productos)
                  .map((key) => {
                    return <li key={key}>{productos[key].nombre}</li>
                  })
                }
              </ul>
            </div>
          </>
        );
      }else{
        return (
          <>
            <AmazonHeader onClickSidebarHeader={handleClickSidebar}/>
            {showSidebar && <AmazonSidebar generos={generos} />} 
            <div className="listaProductos">
              <ul>
                {Object.keys(productos)
                  .filter(producto => productos[producto].genero == generoId)
                  .map((key) => {
                    return <li key={key}>{productos[key].nombre}</li>
                  })
                }
              </ul>
            </div>
          </>
        );
      }
    }else{
      return (
        <>
          <AmazonHeader onClickSidebarHeader={handleClickSidebar}/>
            {showSidebar && <AmazonSidebar generos={generos} />} 
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
        </>
      );
    }
  }
  else {
    return (<div></div>)
  }
}

export default AmazonListaProductos;
