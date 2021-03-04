import React, { useState } from "react"
import './AmazonSearch.css';

function AmazonSearch({ onSubmit }) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        onSubmit({ keyword })
    }

    const handleInputChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="  Busca algo to chulo!" width="48" height="48" onChange={handleInputChange} type='text' value={keyword} />
            <button>¡Buscar!</button>
        </form>
    )
}

export default AmazonSearch;