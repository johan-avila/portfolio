import React from "react";
import "./css/Nav.css"

class Nav extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav>
                    <p className="nav-logo">J</p>
                    <a className="nav-contactMe" 
                    href="https://www.linkedin.com/in/johan-avila-41098a129/" target="__blank" >
                        ¡Contactarme!
                    </a>
                </nav>
            </React.Fragment>
        )
    }
}

export default Nav