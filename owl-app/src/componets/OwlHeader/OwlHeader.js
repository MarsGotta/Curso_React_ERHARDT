import './OwlHeader.css';
import OwlIcon from '../OwlIcon/OwlIcon'
import OwlLogo from '../OwlLogo/OwlLogo'
import { Link } from "react-router-dom";

function OwlHeader() {
  return (
    <header>
      {/* <OwlIcon name="bar" /> */}
      <div className ="owl-header">
      <OwlIcon name="bar"/> 
      
      <h1> <Link to="/"><OwlLogo /></Link>BuscaGifs</h1> 
      
      
      <Link to="/search">
        <OwlIcon name="search"/>
      </Link>
      </div>
      
      
    </header>
  );
}

export default OwlHeader;
