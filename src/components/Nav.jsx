import React from "react";
import {Link} from "react-router-dom"
import "./css/Nav.css"

class Nav extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav>
                    <Link className="nav-logo" to="/"><p > J </p> </Link>
                    <a className="nav-button" 
                    href="https://www.linkedin.com/in/johan-avila-41098a129/" target="__blank" >
                        ¡Contactarme!
                    </a>
                    <Link className="nav-button nav-button_proyects" to="/proyects" >
                        Proyectos
                    </Link>
                </nav>
            </React.Fragment>
        )
    }
}

export default Nav