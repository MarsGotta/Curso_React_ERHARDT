import './gif.css';


function Gif(props) {
  
  return ( 
      <div class="center">
        <img className={props.class} src={props.url} />
        <h5>{props.name}</h5> <p>{props.categoria}</p>
      </div>
  );
}
 
export default Gif;

