import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useUpdateDocumentTitle, useAPI } from '../../core';
// import OwlRating from '../../componets/OwlRating/OwlRating';
// import OwlButton from '../../componets/OwlButton/OwlButton'
import './DetailView.css';
import Gif from '../../componets/gif/gif';
import LikeButton from '../../componets/LikeButton/LikeButton' 


function OwlDetailView() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const { response } = useAPI('http://localhost:4444/gifs');

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
      <Gif name={detail?.name} url={detail?.url} categoria={detail?.categoria} class="gif-big"/>
      <LikeButton />
    </main>
  );
}

export default OwlDetailView;
