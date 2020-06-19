const counterReducer = (state,action)=> {

    switch(action.type) {

        case 'inc' :
            return ++state;
        case 'dec' :
            return --state;
    }
}
export default counterReducer;