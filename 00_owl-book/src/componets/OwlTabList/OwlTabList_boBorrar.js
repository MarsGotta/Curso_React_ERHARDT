//import OwlItem from '../OwlItem/OwlItem'
import './OwlTabList.css';

function OwlTabList({genreList}) {
  return (
    <>
      <ul className="tab-list">
        {genreList.map((item, key) => {
          return <li key={key}>{item}</li>
        })}
      </ul>
    
    </>
  );
}

export default OwlTabList;
