import React from "react";
import {Link} from "react-router-dom"
import "./css/Nav.css"

class Nav extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav>
                    <p className="nav-logo">
                        <Link to="/">J</Link>
                    </p>
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