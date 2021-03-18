import ShopNav from '../ShopNav/ShopNav'
import ShopIcon from '../ShopIcon/ShopIcon'
import ShopLogo from '../ShopLogo/ShopLogo'
import './ShopHeader.css';
import ShopHamburguer from '../ShopHamburguer/ShopHamburguer';

function ShopHeader({ changeTheme, theme }) {
  return (
    <nav className={'wrapper-nav'}>
      <ShopLogo />
      <ShopHamburguer/>
      <ShopNav />
    </nav>
  );
  return (
    <>
      <header className={`Shop-header ${theme}`}>
        <ShopIcon name="bar" />
        <ShopLogo />
        <ShopIcon name="search" />
        <button onClick={changeTheme}>
          Theme
        </button>
      </header>
      <ShopNav />
    </>
  );
}

export default ShopHeader;
