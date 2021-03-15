import OwlInput from "../OwlInput/OwlInput";
import OwlIconButton from "../OwlIconButton/OwlIconButton"
import './OwlInputSearch.css';
import { useState } from "react";

function OwlInputSearch({ onClick }) {
  const [inputValue, setInputValue] = useState('')

  function onSearch() {
    onClick(inputValue)
    setInputValue('')
  }
  function changeInput({ value }) {
    setInputValue(value)
  }
  return (
    <section className="owl-input-search">
      <OwlInput value={inputValue} onChange={({ target }) => changeInput(target)} />
      <OwlIconButton name="search" onClick={onSearch} />
    </section>
  );
}

export default OwlInputSearch;
