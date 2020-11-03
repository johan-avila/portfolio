import React from "react";

import Nav from "../components/Nav"
import Presentation from "../components/Presentation"
class Home extends React.Component {

    render(){
        return(
            <React.Fragment>
                <header>
                    <Nav  />
                </header>
                <main>
                    <Presentation/>
                </main>
            </React.Fragment>
        )
    }
}

export default Home