import OwlHeader from '../componets/OwlHeader/OwlHeader';

function Layout({children}) {
  return (
    <div className="Layout">
      <OwlHeader />
      {children}
    </div>
  );
}

export default Layout;
