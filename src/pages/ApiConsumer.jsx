import React from "react";
import gql from "graphql-tag"
import { graphql } from "react-apollo"

class ApiConsumer  extends React.Component {
    
    render (){    
        let courses =  this.props.data.getCourses
        
        return (
            <div>
                {
                    courses && courses.map(({title,teacher,description, _id}) => {
                        return <div key={_id} >
                            <h3>{title}</h3>
                            <h4>{teacher}</h4>
                            <h6>{description}</h6>                            
                        </div>
                    })                    
                }
            </div>
        )
    }
}

const query = gql`
        query {
            getCourses{
            _id
            title
            teacher
            description
        }
    }
    `
const data = graphql(query)(ApiConsumer)



export default data;