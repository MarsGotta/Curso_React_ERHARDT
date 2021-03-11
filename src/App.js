import React from 'react';
import ReactDOM from 'react-dom';
import Libros from './Libros';
import Perfil from "./Perfil.js";
import { HashRouter as Router, Route } from 'react-router-dom';
import DetalleLibro from './DetalleLibro';

const App = ({configuration}) =>  {
    const signedIn=Liferay.ThemeDisplay.isSignedIn();
    console.log(signedIn);
	return (
        <div>
        {signedIn ? 
            (<Router>
                <Route exact path="/">
                    <Perfil />
                </Route>
                <Route exact path="/libros"> 
                    <Libros />
                </Route>
                <Route exact path="/libro/:contentId"> 
                    <DetalleLibro />
                </Route>
            </Router>) : (<div><p>Tienes que iniciar sesión</p></div>)
        }
        </div>
	);

}
export default App;