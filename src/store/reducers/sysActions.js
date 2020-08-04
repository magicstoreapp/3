const sysActionReducer = (state = false, action) =>{
    switch(action.type){
        case 'COPY':
            return !state;
        default:
            return state;
    }
}

export default sysActionReducer;
