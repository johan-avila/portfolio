import React from "react"
import Nav from "../components/Nav"
import Footer from "./Footer"
class Layout extends React.Component {
    render(){
     return(
        <React.Fragment>
            <Nav/>
            {this.props.children}
            <Footer/>
        </React.Fragment>)
    }
}

export default Layout