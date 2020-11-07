import React from "react";
import "./css/Card.css"
class Card extends React.Component {
     render() {
        return (
            < div className="card" >
                <div className="card-left" >
                    <img className="card-left_img" src={this.props.data.img.link} alt=""/>
                </div>

                <div className="card-right" >
                    <h2>{this.props.data.title}</h2>
                    <p>{this.props.data.body}</p>
                    <a href={`${this.props.data.link}`} target="_blank" rel="noreferrer" className="card-right_appLink">
                        Click Here!
                    </a>
                    <div className="card-right_tecnologies" >
                        <p>Tecnologies:</p>
                        {this.props.data.technologies.map(e =>{
                            return <img src={e.link} alt={e.alt} />
                        })}
                    </div>
                </div>
                

            </div>
        )

    }
}

export default Card