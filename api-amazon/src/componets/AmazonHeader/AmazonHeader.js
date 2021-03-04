import './AmazonHeader.css';
import AmazonIcon from '../AmazonIcon/AmazonIcon'
import AmazonLogo from '../AmazonLogo/AmazonLogo'
import AmazonSearch from '../AmazonSearch/AmazonSearch';
import AmazonSidebar from '../AmazonSidebar/AmazonSidebar';
import { generos } from './mocks.js';

function AmazonHeader() {

  const handleSubmit = evt => {
    console.log('ha hecho submit: ' + (evt.keyword != null ? evt.keyword : ''));
  }

  const handleClickLogo = evt => {
    console.log('ha hecho click en el logo');
  }

  return (
    <div>
      <div className="headerBar">
        <div className="barLeft">
          <AmazonIcon name="bar" />
        </div>

        <div className="barCenter">
          <AmazonLogo onClick={handleClickLogo} />
        </div>

        <div className="barRight">
          <AmazonSearch onSubmit={handleSubmit} />
        </div>
      </div>   
      <div>
        <AmazonSidebar generos={generos} />
      </div>
    </div>
  );
}

export default AmazonHeader;
