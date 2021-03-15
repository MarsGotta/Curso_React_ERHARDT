import OwlNav from '../OwlNav/OwlNav'
import OwlIcon from '../OwlIcon/OwlIcon'
import OwlLogo from '../OwlLogo/OwlLogo'
import './OwlHeader.css';

function OwlHeader({ changeTheme, theme }) {
  return (
    <>
      <header className={`owl-header ${theme}`}>
        <OwlIcon name="bar" />
        <OwlLogo />
        <OwlIcon name="search" />
        <button onClick={changeTheme}>
          Theme
        </button>
      </header>
      <OwlNav />
    </>
  );
}

export default OwlHeader;
