import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectColor} from '../actions/index'
import { Popup } from 'semantic-ui-react'
let divStyle = {}
class ColorCircle extends Component{

    render(){
        divStyle = {
            background: this.props.color.color,
         }
        if(this.props.color === this.props.activeColor){
        divStyle = {
            background: this.props.color.color,
            borderColor: 'blue' 
        }}
        return(
            <Popup
            trigger={<div className='colorCircle' style={divStyle} onClick={() => {this.props.selectColor(this.props.color)}} >
            </div>}
            content={this.props.color.color}
            size='mini' />
        )
    }
}
function mapStateToProps(state){
    return{
        activeColor: state.activeColor
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectColor: selectColor
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorCircle)