import IconCollection from "./IconCollection";
import "./AmazonIcon.css";

function AmazonIcon({ name, onClick }) {
  const handleClickSideLeft = (evt) => {
    onClick();
  };

  if (name == "bar") {
    return (
      <button onClick={handleClickSideLeft} className="btnBar">
        <IconCollection name={name} />
      </button>
    );
  } else {
    return <IconCollection name={name} />;
  }
}

export default AmazonIcon;
