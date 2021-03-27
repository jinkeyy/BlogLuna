export default (state = {token:""}, action)=>{
    switch(action.type){
        case "FETCH_TOKEN":
            return {
                token : state.token
            }
        case "SET_TOKEN":
            return {
                token: action.payload
            }
        default:
            return state;
    }
}