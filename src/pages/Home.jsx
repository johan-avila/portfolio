// {/* <Proyects myProyects={MyProyects}/> */}
import React from "react";

import "./css/Home.css"
import Presentation from "../components/Presentation"
import Skills from "../components/Skills"

class Home extends React.Component {

    render() {
        return (
            <div>                
                    <Presentation />
                    <div className="aboutMe">
                        <p className="aboutMe-title" >¡Un gusto tenerte aqui! Soy Johan, Backend developer con Node.js </p> 
                        <p className="aboutMe-presentation">Back End developer con Node.js, estudiante en la UNAM (Universidad Nacional Autónoma de México) y Platzi Master el programa intensivo y remoto de educación en tecnología.
Soy un apasionado por la tecnología, me encanta construirla porque el código está en el núcleo de la civilización.
Actualmente me encuentro desarrollando aplicaciones con Node.js pero me encanta todo lo que tiene que ver con Javascript y en general con las aplicaciones web.</p>
                    </div>
                        <Skills/>

            </div>
        )   
    }
}

export default Home