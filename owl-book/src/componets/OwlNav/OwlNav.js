import { Link } from "react-router-dom";
import './OwlNav.css';

function OwlNav() {
  const elements = [
    {
      name: 'Inicio',
      url: '/'
    },
    {
      name: 'Buscar',
      url: '/search'
    }
  ]
  return (
    <nav className="owl-nav-box">
      <ul className="owl-nav-list">
        {elements.map(({ name, url }, key) => {
          return <li className="owl-nav-item" key={key}><Link to={url}>{name}</Link></li>
        })}
      </ul>
    </nav>
  );
}

export default OwlNav;
