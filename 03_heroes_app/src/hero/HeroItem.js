import React from 'react'
import Heroes from './../data_heroes.js'

import './HeroItem.css';


const HeroItem = () => {
    const showHeroes = Heroes.map((hero, id) => {
        return (
            <li key={hero.id }>
                <img src={hero.url_large_portrait} alt={hero.localized_name} />
                <p>{hero.localized_name}</p>
            </li>
        )
    })
    return (
        <ul className="card-hero">
            {showHeroes}
        </ul>
    )
}

export default HeroItem;
