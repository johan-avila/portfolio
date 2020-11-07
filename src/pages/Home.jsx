import React from "react";

import Nav from "../components/Nav"
import Presentation from "../components/Presentation"
import Proyects from "../components/Proyects"

class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <header>
                    <Nav />
                </header>
                <main>
                    <Presentation />
                    <Proyects/>
                </main>
            </React.Fragment>
        )
    }
}

export default Home