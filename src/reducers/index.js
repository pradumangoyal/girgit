import {combineReducers} from 'redux'
import ColorReducer from './reducer-color'
import ActiveColor from './reducer-active-color'

const allReducers = combineReducers({
    colors: ColorReducer,
    activeColor: ActiveColor
})

export default allReducers