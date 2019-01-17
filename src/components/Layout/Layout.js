import React from 'react';


import Header from './Header/Header';
import Events from '../../service/Fetchevents';

import  './Layout.css';

const layout=(props)=>{
    
return(
    <div>
        
    <div className="Header"><Header/></div>
    <div className="container">
    <Events/>
    </div>
    </div>
    );
}

export default layout;