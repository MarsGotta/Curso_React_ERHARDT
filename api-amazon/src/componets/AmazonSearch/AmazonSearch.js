import React, { useState } from "react";
import "./AmazonSearch.css";
import AmazonIcon from "../AmazonIcon/AmazonIcon";

function AmazonSearch({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  const handleInputChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder=" Busca algo chulo!"
        onChange={handleInputChange}
        type="text"
        value={keyword}
      />
      <button disabled={keyword != null && keyword != "" ? false : true}>
        <AmazonIcon name="search" />
      </button>
    </form>
  );
}

export default AmazonSearch;
