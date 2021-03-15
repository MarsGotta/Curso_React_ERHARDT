import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useUpdateDocumentTitle, useAPI } from '../../core';
import OwlRating from '../../componets/OwlRating/OwlRating';
import OwlButton from '../../componets/OwlButton/OwlButton'
import './OwlDetailView.css';

function OwlDetailView() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const { response } = useAPI('http://localhost:4444/books');

  useEffect(() => {
    findDetail()
  }, [id, response]);

  useUpdateDocumentTitle(`${detail?.title} - ${detail?.author} | OwlBook`);

  function findDetail() {
    const detailFind = response.filter(item => {
      return Number(id) === item.id && item;
    })[0];
    setDetail(detailFind)
  }

  return (
    <main>
      <img src={`/${detail?.src}`} />
      <h1>{detail?.title}</h1>
      <h2>{detail?.author}</h2>
      <OwlRating stars={detail?.stars} />
      <p>{detail?.description}</p>
      <div>
        <OwlButton value="Más info" />
        <OwlButton value="Comentarios" />
      </div>
      <OwlButton value="¿Dónde comprar?" />
    </main>
  );
}

export default OwlDetailView;