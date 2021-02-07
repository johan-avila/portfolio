// {/* <Proyects myProyects={MyProyects}/> */}
import React from "react";
import ProyectsComponent from "../components/Proyects"

import myProyectsMock from "../mocks/proyects"
class Proyects extends React.Component {
    render() {
        console.log(myProyectsMock);
        return (
            <ProyectsComponent myProyects={myProyectsMock} />
        )   
    }
}

export default Proyects