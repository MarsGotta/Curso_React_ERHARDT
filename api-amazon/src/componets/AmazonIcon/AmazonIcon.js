import IconCollection from './IconCollection'
import './AmazonIcon.css';

function AmazonIcon({ name }) {

  const handleClickSidebar = evt => {
    console.log('ha hecho click en el sidebar');
  }

  return <IconCollection onClickSidebar={handleClickSidebar} name={name} />
}

export default AmazonIcon;
