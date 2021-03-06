import React from 'react'
const e = React.createElement;

export const CounterApp = (initialState=10) => {
    const [state, setstate] = useState(initialState)

    return (
        <div>
            <button onClick={() => { setstate(state + 1)}}>+1</button>
             
        </div>
    )
}

 const domContainer = document.querySelector('#counter');
    ReactDOM.render(e(CounterApp), domContainer);
