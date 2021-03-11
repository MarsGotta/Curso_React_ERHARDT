import { useEffect, useState } from 'react';
import Lista from '../../componets/lista/Lista';
import Buscador from '../../componets/buscador/buscador';

import './HomeView.css';

function HomeView() {
  const [gifs, setGifs] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const gifsData = [
    {
      name: 'Emoji',
      url: 'https://media0.giphy.com/media/3nbbQlUpGDdgA/giphy.gif?cid=ecf05e47pvw700q91scsriny3ibcflnmjavaw4ojt3k1o00p&rid=giphy.gif',
      categoria: 'Dibujos'
    },
    {
      name: 'Mano',
      url: 'https://i.giphy.com/media/X4bXyDUuoueJbDj2dH/giphy.webp',
      categoria: 'Dibujos'
    },
    {
      name: 'Einstein',
      url: 'https://media.giphy.com/media/l0HlRA94QhnVZKlpu/giphy.gif',
      categoria: 'Personajes'
    },
    {
      name: 'Friday',
      url: 'https://media.giphy.com/media/dUfFmmMSyNMf0zLKS8/giphy.gif',
      categoria: 'Textos'
    },
    {
      name: 'No',
      url: 'https://pro2-bar-s3-cdn-cf.myportfolio.com/ea622397181692a15a372eff6286a156/1b4d8973-1d92-490f-85a9-7d25a7080e92_rw_600.gif?h=de560ed58d89faedd256bdd809394b88',
      categoria: 'Textos'
    },
    {
      name: 'Boom',
      url: 'https://media.giphy.com/media/dw9DTU8Cu61Sy9FQ7j/giphy.gif',
      categoria: 'Textos'
    }
  ]

  const categoriasData = [
    {
      id: 1,
      name: 'Dibujos'
    },
    {
      id: 2,
      name: 'Personajes'
    },
    {
      id: 3,
      name: 'Textos'
    }
  ]
  
  useEffect(() => {
    setGifs(gifsData);
    setCategorias(categoriasData)
  }, [gifsData, categoriasData])

  const renderLoading = () => gifsData?.isLoading && <p>Cargando...</p>;
  const renderMain = () => !gifsData?.isLoading && (
    <>
      <div><Buscador /></div>
      <Lista listaGifs={gifsData} listaCategorias={categoriasData} />
      
      {/* <OwlTabList genreList={genres} bookList={list} />
      <OwlLiteList bookList={list} /> */}
      
    </>
  )

  return (
    <main className="App">
      {renderLoading()}
      {renderMain()}
    </main>
  );
}

export default HomeView;
