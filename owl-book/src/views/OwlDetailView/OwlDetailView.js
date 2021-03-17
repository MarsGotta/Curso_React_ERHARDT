import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useUpdateDocumentTitle, useAPI } from '../../core';
import OwlRating from '../../componets/OwlRating/OwlRating';
import OwlButton from '../../componets/OwlButton/OwlButton';
import OwlLikeButton from '../../componets/OwlLikeButton/OwlLikeButton';
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
    <main className="owl-detail-view">
      <img className="owl-detail-img" src={`/${detail?.src}`} />
      <h1 className="owl-detail-title">{detail?.title}</h1>
      <h2 className="owl-detail-sub-title">{detail?.author}</h2>
      <div className="owl-detail-rating-like-box">
        <OwlRating stars={detail?.stars} />
        <OwlLikeButton like={detail?.like} />
      </div>
      <p className="owl-detail-description">{detail?.description}</p>
      <div className="owl-detail-button-box">
        <OwlButton className="owl-detail-button" value="Más info" />
        <OwlButton className="owl-detail-button" value="Comentarios" />
      </div>
      <OwlButton className="owl-detail-button" value="¿Dónde comprar?" />
    </main>
  );
}

export default OwlDetailView;