import './AmazonHeader.css';
import React, { useCallback } from "react"
import AmazonIcon from '../AmazonIcon/AmazonIcon'
import AmazonLogo from '../AmazonLogo/AmazonLogo'
import AmazonSearch from '../AmazonSearch/AmazonSearch';
import { useLocation } from "wouter"

function AmazonHeader() {

  const [path, pushLocation] = useLocation()

  const handleSubmit = useCallback(({ keyword }) => {
    console.log('ha hecho submit: ' + (keyword != null ? keyword : ''));


    pushLocation(`/search/${keyword}`)
  }, [pushLocation])


  const handleClickLogo = evt => {
    console.log('ha hecho click en el logo');
  }

  return (
    <div>
      <div className="headerBar">
        <div className="barLeft">
          <AmazonIcon name="bar" />
        </div>

        <div className="barCenter">
          <AmazonLogo onClick={handleClickLogo} />
        </div>

        <div className="barRight">
          <AmazonSearch onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default AmazonHeader;
