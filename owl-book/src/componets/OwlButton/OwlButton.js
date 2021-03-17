import './OwlButton.css';

function OwlButton({ value, className }) {
  return (
    <button className={className}>{value}</button>
  );
}

export default OwlButton;
