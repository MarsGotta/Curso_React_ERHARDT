// function ComponetContainer(){
//     return <p>hola</p>
// }

// // ReactDOM.render(ComponetContainer(), document.getElementById('root'))
// ReactDOM.render(<ComponetContainer/>, document.getElementById('root'))

function Lista(){
    const lista = [{name:'pizza', precio: 2}, 
                    {name:'olivas', precio: 3}, 
                    {name:'cerveza', precio: 1}]
    return (
    <div>
        Soy una lista:
        <ul>
            {lista.map((i) => {return <li key={i}>{lista[i].name} :: {lista[i].price} </li>})}
        </ul>
    </div>)
}

export default Lista;