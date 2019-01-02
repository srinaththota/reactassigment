import React,{Component} from 'react';
import './Header.css';
import Login from '../../../containers/login/login';

class Header extends Component{

    render(){
        
            return(
                <div className="header"><center>Bet365</center>
                <div className="login">
                <Login/>
                </div>
                </div>
            );
    
}

}

export default Header;