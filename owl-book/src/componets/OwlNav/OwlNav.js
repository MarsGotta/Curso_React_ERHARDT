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
    },
    {
      name: 'Detalle',
      url: '/detail'
    }
  ]
  return (
    <nav>
      <ul>
        {elements.map(({ name, url }) => {
          return <li><Link to={url}>{name}</Link></li>
        })}
      </ul>
    </nav>
  );
}

export default OwlNav;
