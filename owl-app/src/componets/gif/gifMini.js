import './gif.css';
import Gif from './Gif'

function GifMini(props) {
  const { name, url, categoria} = props
    return ( 
        <div class="gifMini">
              <Gif name={name} url={url} categoria={categoria}/>
        </div>
    );
  }


export default GifMini;
