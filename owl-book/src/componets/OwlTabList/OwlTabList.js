import './OwlTabList.css';
import OwlItem from '../OwlItem/OwlItem';

function OwlTabList({generosList, bookList}) {
    return (
        <>
            <ul className="tab">
                {generosList.map((item, key) => {
                    return <li className="tab-link" key={key}>{item}</li>
                })}
            </ul>
            <div className="container">
                <ul>
                    {bookList.map((item, key) => {
                        const {src, title, author, stars, liked, genero} = item
                        return <OwlItem key={key} src={src} title={title} author={author} stars={stars} liked={liked} genero={genero}/>
                    })}
                </ul>
            </div>
        </>
    );
}

export default OwlTabList;