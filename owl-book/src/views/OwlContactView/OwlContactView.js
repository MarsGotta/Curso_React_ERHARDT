import { useState } from "react"
import OwlInput from "../../componets/OwlInput/OwlInput"
import './OwlContactView.css';

function OwlContactView() {
  const [name, setName] = useState('');
  const [showError, setShowError] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (name === '') {
      setShowError(true)
    }
  }

  function handleChange({ target }) {
    setName(target?.value)
  }
  return (
    <main className="owl-detail-view">
      <form onSubmit={handleSubmit}>
        <OwlInput value={name} onChange={handleChange} placeholder="Ingresa tu nombre" />
        <OwlInput type="submit" value="Submit" />
      </form>
      {showError && <p>Tienes que rellenar todos los campos</p>}
    </main>
  );
}

export default OwlContactView;
