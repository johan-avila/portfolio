import React from "react";
import { useParams } from "react-router-dom";
import curriculumFrontend from "../static/curriculomJohanAG.pdf";
import curriculumBackend from "../static/curriculumJohanAvilaGuerrero.pdf"; 

import "./css/Curriculum.css";

const Curriculum = () => {
    const {id} = useParams()
    
    return (
        <div className="curriculum" >
            <embed
                className="curriculum-item"
                src={id ? curriculumBackend : curriculumFrontend }
                type="application/pdf">
            </embed>
        </div>
    )
}

export default Curriculum;