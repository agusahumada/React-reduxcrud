//cada reducer tiene su propio state 
const initialState = {
    products: [],
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type) {
        default:
            return state;
    }
}