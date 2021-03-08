import AmazonHeader from '../componets/AmazonHeader/AmazonHeader';
import AmazonSidebar from '../componets/AmazonSidebar/AmazonSidebar';
import { generos, productos } from '../componets/AmazonSidebar/mocks.js';

function Home({ children }) {
  return (
    <div className="Home">

      <AmazonHeader />
      <AmazonSidebar generos={generos} />

      {children}
    </div>
  );
}

export default Home;
