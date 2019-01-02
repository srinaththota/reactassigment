import React , {Component} from 'react';

import './Eventdetails.css';

import {connect} from 'react-redux';

class EventDetails extends Component{

state={
    teamA:'',
    teamB:'',
    draw:'',
    loginflag:false
}

    placebetonTeam=()=>{
        console.log("something selected");
        console.log(this.state.teamA);
        
        if(this.props.user.username ==='')
        {
            console.log("something selected without");
            this.setState({
                ...this.state,
                loginflag:true
            });
        }
        else{
            
        console.log("something selected with username");
        this.props.AddBetsToStore(this.state.teamA+this.props.home,
            this.state.teamB+this.props.away,
            this.state.draw+this.props.home+this.props.away,
            this.props.user.username);
            localStorage.setItem(this.props.user.username+this.props.home+this.props.away, 
                this.state.teamA+this.props.home+
                this.state.teamB+this.props.away+
                this.state.draw+this.props.home+this.props.away+
                this.props.user.username);

                document.getElementById("result").innerHTML = localStorage.getItem(this.props.user.username+this.props.home+this.props.away);
        
    }
    }
    render(){
        let event=    <p><h2>Place bet on below event</h2></p>
        let footballImage = false;
        let snookerImage = false;
        let tennisImage = false;
        let iceHockeyImage = false;
        let handballImage = false;

        let swedenflag = false;
        let englandflag=false;
        let franceflag=false;

        if(this.props.country === 'SWEDEN'){
            swedenflag= true;
        }
        if(this.props.country === 'ENGLAND'){
            englandflag= true;
        }
        if(this.props.country === 'FRANCE'){
            franceflag= true;
        }


        if(this.props.sport === 'FOOTBALL'){
            footballImage=true;
        }
        if(this.props.sport === 'SNOOKER'){
            snookerImage=true;
        }
        if(this.props.sport === 'TENNIS'){
            tennisImage=true;
        }
        if(this.props.sport === 'ICE_HOCKEY'){
            iceHockeyImage=true;
        }
        if(this.props.sport === 'HANDBALL'){
            handballImage = true;
        }
        
        if(this.props.id){

        event=(<div><div className="content">
        <table>
            <tbody>
            
                <tr>
                <th>{this.props.home}</th>
                <th></th>
                <th>{this.props.away}</th>
                
                </tr>
                <tr>
                    <td>
                       <center><input type="text" 
                       onChange={event=>this.setState({teamA:event.target.value})}/> vote team-a</center>
                    </td>
                    <td>
                    <center><input type="text" 
                    onChange={event=>this.setState({draw:event.target.value})}/>DRAW</center>
                    </td>
                    <td>
                    <center><input type="text" 
                    onChange={event=>this.setState({teamB:event.target.value+{}})}/>
                     vote team-b</center>
                    </td>
                                        
                </tr>
                
                </tbody>
        </table>
        
        </div>
        <button onClick={this.placebetonTeam}>Place Bet</button>
        <div>
             <center>{this.props.country}
             {(franceflag)?
             <img src="https://content.screencast.com/users/fg-a/folders/world-flags/media/8cfe9e61-62f1-4068-8e3d-3ce249f692ef/animated-french-flag.gif" width="68" height="50" border="0" alt="Flags"></img>:
             null}
             {(swedenflag)?
             <img src="https://content.screencast.com/users/fg-a/folders/world-flags/media/97284e55-e0b8-4987-a89d-ad7612e88c34/animated-sweden-flag.gif" width="68" height="50" border="0" alt="Flags"></img>:
             null}
             {(englandflag)?
             <img src="https://content.screencast.com/users/fg-a/folders/world-flags/media/f72ac381-bb38-4343-b2cb-e6010e23e888/greatbrE.gif" width="68" height="50" border="0" alt="Flags"></img>:
             null}
             </center>
        </div>
        {(this.state.loginflag)?<div><p>Please login to place bet</p></div>:null}
        </div>);
        }
        return(
            <div>
               <div>
                  Welcome {this.props.user.username}
            <center>
            {(footballImage)?<img 
            src="http://pngimg.com/uploads/football/football_PNG52797.png"
            width="55px" height="55px" style={{objectfit: 'cover'}}></img>:null}

            {(tennisImage)?<img src="http://pngimg.com/uploads/tennis/tennis_PNG10421.png"
            width="55px" height="55px" style={{objectfit: 'cover'}}></img>:null}
            {(snookerImage)?<img src="http://www.pngmart.com/files/4/Snooker-PNG-Clipart.png"
            width="55px" height="55px" style={{objectfit: 'cover'}}></img>:null}
            {(iceHockeyImage)?<img src="http://pngimg.com/uploads/hockey/hockey_PNG100.png"
            width="55px" height="55px" style={{objectfit: 'cover'}}></img>:null}
            {(handballImage)?<img src="http://www.pngmart.com/files/4/Handball-PNG-HD.png"
            width="55px" height="55px" style={{objectfit: 'cover'}}></img>:null}
            
            </center>
        </div> 
            {event}
            <div>
            <div id="result"></div>
                {this.props.user.betdetails} and {this.props.user.username}
                
            </div>
            {this.props.sport}
            </div>
        );
    }
}

const mapToProps=state=>{
    return{
        user:state.userCreds
    }
}
const mapDispatchtoProps=dispatch=>{

    return{
        AddBetsToStore:(teamA,teamB,draw,username)=>dispatch({type:'BETDETAILS',teamA,teamB,draw,username})
    }
}
export default connect(mapToProps,mapDispatchtoProps)(EventDetails);