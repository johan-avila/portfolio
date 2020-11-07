import React from "react";
import "./css/presentation.css"


class Presentation extends React.Component{
    render(){
        return(
            
            <div className="presentation">
                <div className="presentation-helloWorld">
                    {`< Hello World / >`}
                </div>
                <div className="presentation-about"  >
                    👽 I am a full stack web developer, where I am more Backend.
                </div>
                <div className="presentation-contactMe">
                    <p>Contact Me!</p>
                    <div className="presentation-contactMe_gitTwitLinkendin">

                        <a href="https://www.linkedin.com/in/johan-avila-41098a129/" target="_blank" rel="noreferrer">
                            <img src="https://www.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png" alt="linkedin logo"/>
                        </a>
                        <a href="https://github.com/johan-avila" target="_blank" rel="noreferrer">
                            <img className="presentation-contactMe_github" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" alt="github logo"/>
                        </a>
                        <a href="https://twitter.com/johan__ag" target="_blank" rel="noreferrer">
                            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="twitter logo"/>
                        </a>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Presentation