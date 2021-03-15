import './OwlInput.css';

function OwlInput(props) {
  const newProps = { ...props, className: `owl-input ${props.className || ''}` }
  return <input {...newProps} />;
}

export default OwlInput;

