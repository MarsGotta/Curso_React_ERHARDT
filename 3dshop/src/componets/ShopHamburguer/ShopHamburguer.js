import './ShopHamburguer.css';

function ShopHamburguer() {
  return (
    <button className={'hambur-button'} onClick={activateMenu}>
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="90" height="10" rx="8"></rect>
        <rect y="30" width="90" height="10" rx="8"></rect>
        <rect y="60" width="90" height="10" rx="8"></rect>
      </svg>
    </button>
  );
}

function activateMenu(){
  var element = document.getElementById("nav-Menu");
  //console.log(element);
  element.classList.toggle("activateBar");
}

export default ShopHamburguer;
