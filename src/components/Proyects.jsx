import React from "react";

import Cards from "./Cards"

import "./css/Proyects.css"

import MyProyects from "../mocks/proyects"
class Proyects extends React.Component {
    render() {
        return(
            <section className="proyects">
            {
             MyProyects.map(element =>{

                return  <Cards data={element} />
             })
            }
            </section>
        )
    }
}

export default Proyects