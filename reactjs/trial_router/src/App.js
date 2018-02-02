import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './home';
// import Topic from './topic';
import Topics from './topics';


import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

// const liClickAction = function() {
//   console .log("LI IS CLICKED");
// }

// const Topics = ({ match}) => ( 
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           {"Rendering with React" }
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li onClick={liClickAction}>
//         <Link to={`${match.url}/props-v-state`} >
//           Props v. State
//         </Link>
//       </li>
//     </ul>

    
//     <Route path={`${match.url}/:topicId`} render={(props) =>(
//     <Topic {...props} values={`${match.url}`}></Topic>
//     )}/>

//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

class BasicExample extends Component{
constructor(props){
  super(props);
  this.state = extendObservable(this, {
    match:""
  });
   

}
onClickAction (){
  console.log("CLICKEDDDD??D");
}
componentDidMount(){
  //this.onClickAction();
}
render(){
  return( 
// const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li onClick={this.onClickAction}><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
// )
  )
}
}
export default observer(BasicExample);
