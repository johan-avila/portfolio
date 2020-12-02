import React from "react"
import "./css/Skills.css"

import images from "../images"
class Skills extends React.Component {
    render(){
        return(
            <div className="skills">
                <div className="skills-frontend">
                    <div className="skills-frontend_title" >Skills</div>
                    <div>
                        <ul className="listSkills">
                            <li>Node.js</li>
                            <li>MySQL</li>
                            <li>GraphQL</li>
                            <li>MongoDB</li>
                            <li>Travis-CI</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>React (básico)</li>
                            <li>Sass (básico)</li>
                            <li>Git</li>
                            <li>Bootstrap</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                </div>
                <div className="skills-backend">
                    <img className="image-logo" src={images[0]} alt=""/>
                    <img className="image-logo" src={images[1]} alt=""/>
                    <img className="image-logo" src={images[2]} alt=""/>
                    <img className="image-logo" src={images[3]} alt=""/>
                    <img className="image-logo" src={images[4]} alt=""/>
                </div>
            </div>
        )
    }
}

export default Skills