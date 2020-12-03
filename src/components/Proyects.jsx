import React from "react";

import Cards from "./Cards"

import "./css/Proyects.css"

class Proyects extends React.Component {
    render() {
        return(
            <section className="proyects">
            {
             this.props.myProyects.map(element =>{

                return  <Cards data={element} />
             })
            }
            </section>
        )
    }
}

export default Proyects