import OwlIcon from '../OwlIcon/OwlIcon'
import './OwlLikeButton.css';

function OwlLikeButton(props) {
  const selectClass = props?.liked ? `liked ${props?.className || ''}` : props?.className || '';
  const newProps = { ...props, name: 'heart', className: `owl-like-icon ${selectClass}` }
  return (
    <button className="owl-like-icon-button">
      <OwlIcon {...newProps} />
    </button>
  )
}

export default OwlLikeButton;
