import './gif.css';
import Gif from './gif'
import { Link } from "react-router-dom";

function GifMini(props) {
  const { id, name, url, categoria} = props
    return ( 
        <div class="gifMini">
              <Link to={`/detail/${id}`}><Gif name={name} url={url} categoria={categoria} class="gif-small"/></Link>             
        </div>
    );
  }


export default GifMini;
