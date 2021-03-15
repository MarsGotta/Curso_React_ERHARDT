import OwlIcon from '../OwlIcon/OwlIcon'
import './OwlIconButton.css';

function OwlIconButton(props) {
  return (
    <button className="owl-icon-button" onClick={props.onClick}>
      <OwlIcon {...props} />
    </button>
  )
}

export default OwlIconButton;
