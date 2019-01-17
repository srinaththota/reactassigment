import React,{Component} from 'react';
import './Header.css';
import Login from '../../../containers/login/login';

class Header extends Component{

    render(){
        
            return(
                <div className="header"><center>Cloud Application</center>
                <div className="login">
                <Login/>
                </div>
                </div>
            );
    
}

}

export default Header;