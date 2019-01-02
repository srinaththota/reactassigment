import React from 'react';

import Aux from '../../hoc/Aux';
import Header from './Header/Header';
import Events from '../../service/Fetchevents';

import  './Layout.css';

const layout=(props)=>{
    
return(
    <Aux>
        
    <div className="Header"><Header/></div>
    <div className="container">
    <Events/>
    </div>
    </Aux>
    );
}

export default layout;