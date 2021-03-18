import ShopHeaderConnected from '../componets/ShopHeader/ShopHeaderConnected';

function Layout({ children, changeTheme }) {
  return (
    <div className="Layout">
      <ShopHeaderConnected changeTheme={changeTheme} />
      {children}
    </div>
  );
}

export default Layout;
