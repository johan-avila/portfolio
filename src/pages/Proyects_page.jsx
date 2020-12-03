// {/* <Proyects myProyects={MyProyects}/> */}
import React from "react";
import Proyects_Component from "../components/Proyects"

import myProyectsMock from "../mocks/proyects"
class Proyects extends React.Component {
    render() {
        console.log(myProyectsMock);
        return (
            <Proyects_Component myProyects={myProyectsMock} />
        )   
    }
}

export default Proyects