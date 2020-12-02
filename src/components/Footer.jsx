import React from "react"
import SocialMedia from "./SocialMedia"
import "./css/Footer.css"

class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
                <div className="footer-socialMedia">
                    <p>¡Contactame!</p>
                    <SocialMedia/>
                </div>
            </div>
        )
    }

}
export default Footer