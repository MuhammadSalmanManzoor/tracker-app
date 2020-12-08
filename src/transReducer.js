const TransctionReducer = ((state, action)=>{
    switch (action.type){
        case 'Add_TRANSCTION': {
            return [action.payload , ...state];
        }
        default:
            return state;
    }
})
export default TransctionReducer;