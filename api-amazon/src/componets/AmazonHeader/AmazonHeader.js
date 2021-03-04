import './AmazonHeader.css';
import AmazonIcon from '../AmazonIcon/AmazonIcon'
import AmazonLogo from '../AmazonLogo/AmazonLogo'
import AmazonSearch from '../AmazonSearch/AmazonSearch';

function AmazonHeader() {

  const handleSubmit = evt => {
    console.log('ha hecho submit: ' + (evt.keyword != null ? evt.keyword : ''));
  }

  return (
    <div className="headerBar">
      <div className="barLeft">
        <AmazonIcon name="bar" />
      </div>

      <div className="barCenter">
        <AmazonLogo />
      </div>

      <div className="barRight">
        <AmazonSearch onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AmazonHeader;
