import OwlHeader from '../componets/OwlHeader/OwlHeader';
import './layout.css'

function Layout({children}) {
  return (
    <div className="Layout">
      <OwlHeader />
      {children}
    </div>
  );
}

export default Layout;
