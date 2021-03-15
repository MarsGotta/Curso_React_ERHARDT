import OwlHeaderConnected from '../componets/OwlHeader/OwlHeaderConnected';

function Layout({ children, changeTheme }) {
  return (
    <div className="Layout">
      <OwlHeaderConnected changeTheme={changeTheme} />
      {children}
    </div>
  );
}

export default Layout;
