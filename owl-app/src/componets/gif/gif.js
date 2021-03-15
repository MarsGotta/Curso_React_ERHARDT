import './gif.css';


function Gif(props) {
  
  return ( 
      <div class="center">
        <img className="gif" src={props.url} />
        <h5>{props.name}</h5> <p>{props.categoria}</p>
      </div>
  );
}
 
export default Gif;
