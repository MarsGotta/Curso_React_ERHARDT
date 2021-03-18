import { Link } from "react-router-dom";
import './ShopNav.css';

function ShopNav() {

  const elements = [
    {
      name: 'Inicio',
      url: '/'
    },
    {
      name: 'Buscar',
      url: '/search'
    },
    // {
    //   name: 'Detalle',
    //   url: '/detail'
    // }
  ]
  return (
    <ul id={'nav-Menu'} className={'Items'} >
      <li className={'Item Titulete'}> MENU </li>
      {elements.map(({ name, url }, key) => {
        return <li className={'Item'} key={key}><Link to={url}>{name}</Link></li>
      })}
    </ul>
  );
  
}


export default ShopNav;
