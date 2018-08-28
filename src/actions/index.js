let nextId = 3

export const addColor = (color, bgcolor, textcolor) => {
    console.log("You Put an entry with",color);
    return{
        type: 'ADD_COLOR',
        payload: {
            id: nextId++,
            color,
            bgcolor: bgcolor,
            textcolor,
        }
    }
}

export const selectColor = (color) => {
    console.log("You clicked ", color.color)
    return{
        type: 'SELECT_COLOR',
        payload: color
    }
}


