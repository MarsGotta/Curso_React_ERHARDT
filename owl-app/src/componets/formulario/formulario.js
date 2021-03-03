import { render } from "react-dom"
import React from 'react'

class Formulario extends React.Component{
    constructor(props){
        super(props);
        this.state = {nombre: '', descripcion:''}
    }

    handleChange({value, name}){
        this.setState({
            [name]: value
        })
    }

    render(){
        const {nombre, descripcion} = this.state;
        return (
            <form>
                Soy un Formulario
                <input value={nombre} onChange={({target}) => this.handleChange(target)} placeholder="Nombre"/>
                <textarea value={descripcion} placeholder="Descripcion" />
                <button>Enviar</button>
            </form>
            )
    }
    
}

export default Formulario;