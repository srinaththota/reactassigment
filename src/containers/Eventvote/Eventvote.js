import React,{Component} from 'react';



class EventVote extends Component{
    render(){
        return(
            <div >
                {this.props.id} {this.props.vote}
               
            </div>
        );
    }
}

export default EventVote;