const initialState = [
    {
        id: 0,
        color: 'red',
        bgcolor: '#e06975',
        textcolor: '#697de0'
    },
    {
        id: 1,
        color: 'green',
        bgcolor: '#69e093',
        textcolor: '#e06975'
    },
    {
        id: 2,
        color: 'blue',
        bgcolor: '#697de0',
        textcolor: '#69e093'
    }

]

const colors = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_COLOR':
        return [
            ...state,
            action.payload
        ]
        default:
        return state
    }
}

export default colors