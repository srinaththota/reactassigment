const initialState={
   userCreds:{ username:'',
    password:'',
    betdetails:'',
    arr:[]
}

}
const reducer=(state=initialState,action)=>{

    if(action.type==='STORECREDS'){

        
        const userDetails={
            username:action.username,
            password:action.password,
            betdetails:''
        }
        return{
            ...state,
            userCreds:userDetails
        }
    }

    if(action.type==='BETDETAILS'){
        
        const userDetails={
            username:action.username,
            
            betdetails:state.betdetails + action.teamA + action.teamB + action.draw+action.username
        }
        return{
            ...state,
            userCreds:userDetails
        }
        
    }
    console.log(state);
    return state;
}

export default reducer;
