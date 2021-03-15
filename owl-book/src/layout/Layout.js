import OwlHeaderConnected from '../componets/OwlHeader/OwlHeaderConnected';
import './Layout.css';

function Layout({ children, changeTheme, theme = '' }) {
  return (
    <div className={`owl-layout ${theme}`}>
      <OwlHeaderConnected changeTheme={changeTheme} />
      {children}
    </div>
  );
}

export default Layout;