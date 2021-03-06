import React from 'react'

const Logout = ({ handleEvent }) => {
     return <button onClick={e => handleEvent(false)}>Sign out</button>;
}

export default Logout;
