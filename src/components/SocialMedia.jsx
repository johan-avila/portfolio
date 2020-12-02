import React from "react";
import "./css/SocialMedia.css"

class SocialMedia extends React.Component{
    render(){
        return(
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/johan-avila-41098a129/" target="_blank" rel="noreferrer">
                    <img className="socialMedia-logos" src="https://www.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png" alt="linkedin logo"/>
                </a>
                <a href="https://github.com/johan-avila" target="_blank" rel="noreferrer">
                    <img className="socialMedia-logos_github" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" alt="github logo"/>
                </a>
                <a href="https://twitter.com/johan__ag" target="_blank" rel="noreferrer">
                    <img className="socialMedia-logos" src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Emblem.png" alt="twitter logo"/>
                </a>
            </div>
            
            
        )
    }
}

export default SocialMedia