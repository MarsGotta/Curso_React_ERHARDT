import './gif.css';
import OwlIcon from '../OwlIcon/OwlIcon'

function Gif(props) {
  return ( 
      <div>
        <img className="gif" src={props.src} />
        <h5>{props.name}</h5>
      </div>
  );
}

export default Gif;

