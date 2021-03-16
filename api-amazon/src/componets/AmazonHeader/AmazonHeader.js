import "./AmazonHeader.css";
import React, { useCallback } from "react";
import AmazonIcon from "../AmazonIcon/AmazonIcon";
import AmazonLogo from "../AmazonLogo/AmazonLogo";
import AmazonSearch from "../AmazonSearch/AmazonSearch";
import { useLocation } from "wouter";

function AmazonHeader({ onClickSidebarHeader }) {
  const [path, pushLocation] = useLocation();

  const handleSubmit = useCallback(({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    }, [pushLocation]);

  const handleClickLogo = (evt) => {
    console.log("ha hecho click en el logo");
  };

  const handleClickSidebar = (evt) => {
    onClickSidebarHeader();
  };

  return (
    <div>
      <div className="headerBar">
        <div className="barLeft">
          <AmazonIcon name="bar" onClick={handleClickSidebar} />
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
