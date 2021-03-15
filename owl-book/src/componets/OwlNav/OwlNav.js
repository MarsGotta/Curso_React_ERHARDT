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
    <nav>
      <ul>
        {elements.map(({ name, url }, key) => {
          return <li key={key}><Link to={url}>{name}</Link></li>
        })}
      </ul>
    </nav>
  );
}

export default OwlNav;
