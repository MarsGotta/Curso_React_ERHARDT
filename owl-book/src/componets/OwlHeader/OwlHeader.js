import { Link } from "react-router-dom";
import OwlLogo from '../OwlLogo/OwlLogo'
import './OwlHeader.css';

function OwlHeader({ right, left, bottom, theme }) {


  return (
    <>
      <header className={`owl-header`}>
        {left}
        <Link to="/">
          <OwlLogo />
        </Link>
        {right}
      </header>
      {bottom}
    </>
  );
}

export default OwlHeader;
