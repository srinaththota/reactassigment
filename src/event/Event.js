import React,{Component} from 'react';

import './Event.css';




class Event extends Component{

    constructor(props){
        super(props);
    }

    render(){
return(
    <div>
    <div>
    <table>
    <tbody><tr>
    <td onClick={this.props.clicked}>
    {this.props.homeName}
    <i style={{color:'red'}}> vs </i>{this.props.awayName}</td></tr></tbody></table>
    </div>
    </div>
);
}
}

export default Event;