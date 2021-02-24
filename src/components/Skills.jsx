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
                            <li>• Node.js</li>
                            <li>• React</li>
                            <li>• JWT</li>
                            <li>• TypeScript</li>
                            <li>• React</li>
                            <li>• Sass</li>
                            <li>• GraphQL</li> 
                            <li>• Bootstrap</li>
                            <li>• JWT</li> 
                            <li>• Nest.js</li>
                            <li>• MongoDB</li> 
                            <li>• JavaScript</li>
                            <li>• CSS</li> 
                            <li>• MySQL</li>
                            <li>• Travis-CI</li> 
                            <li>• Git</li>

                        </ul>
                    </div>
                </div>
                <div className="skills-backend">
                    <img className="image-logo" src={images[0]} alt=""/>
                </div>
            </div>
        )
    }
}

export default Skills