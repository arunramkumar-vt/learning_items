import React from 'react';

class Topic extends React.Component{
    constructor(props){
        super(props)
        this.match = props.values;

    }
    componentDidMount(){
        console.log("<< TOPIC >> DID MOUNT....." + this.match)

    }
 
    render(){
        return(
            // <h3>{this.match.params.topicId}</h3>
            <h3>{this.match.params}</h3>
        )
    }
}
// const Topic = ({ match }) => (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   )

export default Topic;