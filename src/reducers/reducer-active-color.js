export default function(state=null, action) {
    switch(action.type){
        case 'SELECT_COLOR':
        console.log('trigered')
        return action.payload
        default:
        return state
    }
}