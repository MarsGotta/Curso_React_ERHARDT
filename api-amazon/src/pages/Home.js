import AmazonHeader from '../componets/AmazonHeader/AmazonHeader';
import AmazonSidebar from '../componets/AmazonSidebar/AmazonSidebar';
import { generos, productos } from '../componets/AmazonSidebar/mocks.js';
import React, {useState} from 'react'


function Home({ children }) {
  const [showSidebar, setShowSidebar] = useState(true)

  const handleClickSidebar = evt => {
    if(showSidebar){
      setShowSidebar(false);
    }else{
      setShowSidebar(true);
    }
  }

  return (
    <div className="Home">

      <AmazonHeader onClickSidebarHeader={handleClickSidebar}/>
      {showSidebar && <AmazonSidebar generos={generos} />} 
      {children}
    </div>
  );
}

export default Home;
