import React from 'react';
import {
   
    Route,
    Link
  } from 'react-router-dom';
import Topic from './topic'

import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';

class Topics extends React.Component{
    constructor(props){
        super(props);
        //this.match = props;
    this.temp = 10;
    this.state = extendObservable(this,{
        match:props.match
    })
    this.onClickAction = this.onClickAction.bind(this);
    }
    // liClickAction = function() {
        
    //   }

    onClickAction(aEvent){ 
        console.log("CLICKED----[ " + aEvent.currentTarget.id)
         
    }

    render(){
        return(
            <div>
            <h2>Topics</h2>
            <ul >
                <li>
                <Link id="1" onClick={this.onClickAction} to={this.state.match.url+'/rendering'}>
                    Rendering with React
                </Link>
                </li>
                <li id="2" onClick={this.onClickAction}>
                <Link to={this.state.match.url+'/components'}>
                    Components
                </Link>
                </li>
                <li id="3" onClick={this.onClickAction}>
                <Link to={this.state.match.url+'/props-v-state'} >
                    Props v. State
                </Link>
                </li>
            </ul>

                <Route path={this.match.url+'/:topicId'} component={(props) =>(
                    <Topic {...props} values={this.match.url}></Topic>
                )}/>

                <Route exact path={this.match.url} component={() => (
                <h3>Please select a topic.</h3>
                )}/>
            </div>
        );   
    }
      
    
        
      
}

export default observer(Topics);