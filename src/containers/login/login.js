import React , {Component} from 'react';

import {connect} from 'react-redux';

class Login extends Component{

    state={
        creds:{
        username:'abcd',
        password:''
    },
        validate:true
    }

    
    storeCredentials=()=>{
        console.log("clicked");
        if(this.state.username==='srinath'){
            
            this.setState({
                ...this.state.creds,
                validate:false
            });
            this.props.credsAddtoStore(this.state.username,this.state.password);
        }
        console.log(this.state.username);

    }
    render(){
        
        return(
            <div>
               
                {this.state.validate?
                <div>
                <input type="text"  placeholder="Username" 
                onChange={event=>this.setState({username:event.target.value})} 
                ></input>
                <input type="password"  
                placeholder="password"
                onChange={event=>this.setState({password:event.target.value})}
                ></input>
                <button onClick={this.storeCredentials}>Go</button>
                
                </div>:
                <div>
               Welcome {this.props.username}    
                </div>
            }
            
            </div>
        );
    }
}

const mapStateToProps=state=>{
return{
    crds:state.creds
};
}

const mapDispatchtoProps=dispatch=>{

    return{
        credsAddtoStore:(username, password)=>dispatch({type:'STORECREDS',username:username,password:password})
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Login);