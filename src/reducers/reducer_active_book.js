// state arg is not the application state, only the state this reducer is responsible for. 
// The state created by this reducer is flowing back to the same reducer whenever action occurs
export default function(state = null,action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;                   
    }

    return state;

}