import OwlCard from '../componets/OwlCard/OwlCard';
import OwlHeader from '../componets/OwlHeader/OwlHeader';

function Layout({children}) {
  return (
    <div className="Layout">
      <OwlHeader />
      {children}
      <OwlCard name="Alain"/>
    </div>
  );
}

export default Layout;
