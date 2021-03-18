import './ShopLogo.css';

function ShopLogo({width = 47, height = 51}) {
  return (
    <h1>
        <img src="../../../logo192.png" className={'logoImg'} alt="Logo"/>
    </h1>
  );
}

export default ShopLogo;
