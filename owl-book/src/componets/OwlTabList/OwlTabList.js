import './OwlTabList.css';
import OwlItem from '../OwlItem/OwlItem';

function OwlTabList({generosList, bookList}) {
    return (
        <>
            <ul>
                {generosList.map((item, key) => {
                    return <li key={key}>{item}</li>
                })}
            </ul>
            <div>
                {bookList.map((item, key) => {
                    const {src, title, author, stars, liked, genero} = item
                   return <OwlItem key={key} src={src} title={title} author={author} stars={stars} liked={liked} genero={genero}/>
                })}
            </div>
        </>
    );
}

export default OwlTabList;