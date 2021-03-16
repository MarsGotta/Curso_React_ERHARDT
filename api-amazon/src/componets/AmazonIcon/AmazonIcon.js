import IconCollection from "./IconCollection";
import "./AmazonIcon.css";

function AmazonIcon({ name, onClick }) {
  const handleClickSideLeft = (evt) => {
    onClick();
  };

  return <IconCollection onClickSidebar={handleClickSideLeft} name={name} />;
}

export default AmazonIcon;
