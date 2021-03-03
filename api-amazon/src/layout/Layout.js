import AmazonHeader from '../componets/AmazonHeader/AmazonHeader';

function Layout({children}) {
  return (
    <div className="Layout">
      <AmazonHeader />
      {children}
    </div>
  );
}

export default Layout;
