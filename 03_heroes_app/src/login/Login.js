import React from 'react'
import { useState } from "react";
import SignIn from "./SignIn";
import Logout from "./Logout";
import HeroList from "./../hero_List/HeroList";


const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
if (!isLoggedIn)
    return (
        <>
            <SignIn handleEvent={setIsLoggedIn} />;
            <HeroList />;
        </>
    )
    
  
return <Logout handleEvent={setIsLoggedIn} />
}

export default Login;


