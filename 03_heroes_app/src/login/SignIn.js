import React from 'react'

const SignIn = ({ handleEvent }) => {
    return <button onClick={e => handleEvent(true)}>Sign In</button>
}

export default SignIn;


