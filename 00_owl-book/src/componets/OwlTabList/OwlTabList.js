import OwlItem from '../OwlItem/OwlItem'
import { useState } from 'react'
import './OwlTabList.css';


function OwlTabList({ genreList, bookList }) {
  const [tab, setTab] = useState([])
  
  const handleTab = () => (
    setTab( genre)

  )

  const genre = genreList.map((item, key) => {
    return <li key={key} onClick={}>{item}</li>
  })

  




  const bookGenre = bookList.filter(element => element === genre)
  const books = bookGenre.map((item, key) => {
    const { src, title, author, stars, liked, genre } = item
    return <OwlItem key={key} src={src} title={title} author={author} stars={stars} liked={liked} genre={genre} />
  })




  return (
    <>
      <ul className="tab-list">
        { genre}
     
      </ul>
      <div className="book-list">
        { books}
      </div>
    </>
  );
}

export default OwlTabList;
