import React ,{Component} from 'react';
import axios from 'axios';

import './Fetchevents.css';

import Event from '../event/Event';
import EventDetails from '../containers/eventdetails/Eventdetails';

class FetchEvents extends Component{

    state={
        events:[        
        ]
        
            ,
              eventSelected:null,
              eventhomeName:null,
              eventawayName:null
              
        
    } 
componentDidMount(){
   
  const events =  axios.get('http://localhost:8080/jsonfetch').then(response =>{
    this.setState({events:response.data});
    console.log(response.data);
    console.log("End");
  })
}


    selectEventHandler=(id,homeName,awayName,sport,country,name)=>{
      this.setState({
        eventSelected:id,
        eventhomeName:homeName,
        eventawayName:awayName,
        eventcountry:country,
        eventsport:sport,
        eventName:name
      });
    }
            render(){
                return(
                  <div className="container">
                    <div className="col1">
                    <p>List of Events</p>
                    {this.state.events.map(event=>{
              
                      return <Event 
                      key={event.id}
                      country={event.country} 
                      awayName={event.awayName} 
                      group={event.group}
                      homeName={event.homeName}
                      sport={event.sport}
                      status={event.state}
                      name={event.name}
                      clicked={()=>this.selectEventHandler(event.id,event.homeName,event.awayName,event.sport,event.country,event.name)}
                      />
                      
                  })}
          
                  
                    </div>
                    <div className="col2">
                    <center>
                      
                    <EventDetails id={this.state.eventSelected} 
                    home={this.state.eventhomeName}
                    away={this.state.eventawayName} 
                    country={this.state.eventcountry}
                    sport={this.state.eventsport}
                    name={this.state.eventName}/>
                    </center>
                    </div>
                    
                    </div>
                );
            }
}

export default FetchEvents;