import React from 'react'
import { useState } from "react";
import SignIn from "./login/SignIn";
import Logout from "./login/Logout";
import HeroList from "./hero_List/HeroList";


import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [personajes, setPersonajes] = useState(["Superman", "Batman", "Spiderman"])

  const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => { 
        e.preventDefault();
        setInputValue(e.target.value)
    }

     const addHero = (e) => { 
        e.preventDefault();
       setPersonajes(heroes => [...heroes, inputValue])

    }

    
if (!isLoggedIn)
  return (
    <>
       <SignIn handleEvent={setIsLoggedIn} />;
    <div className="container">
   
    <div className="hero_list">
          <HeroList />;
      </div>
        <div className="hero_form">
          <h2>Lista de héroes</h2>
            <form>
              <input
                type="text"
                value={inputValue}
                onChange={handleInput}
              />
             <button onClick={addHero }>Añadir héroe</button>
           </form>
      
            <ul>
                {
                  personajes.map((personaje, index) => {
                  return <li key={index}>{personaje}</li>
                })
              }
            </ul>
         
          
        
       </div>
      </div>
      </>
  )
    
  
return <Logout handleEvent={setIsLoggedIn} />
}

export default App;


