const reducer = (state=0,action)=>{
    if(action.type === 'INCREMENT'){
        return state + action.payload;
    }
    if(action.type === 'blast'){
        return (state+1)*action.payload
    }
    return state
}

export default reducer;