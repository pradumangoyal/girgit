import React,{Component} from 'react'
import {connect} from 'react-redux'

class Tab1 extends Component{

    render(){
    let divStyle = {}
    if(!this.props.color){
        divStyle = {
            color: 'yellow',
            textAlign: 'center',
            background: 'green',
        }
    }
    else{
        divStyle = {
        color: this.props.color.textcolor,
        textAlign: 'center',
        background: this.props.color.bgcolor,
    }}
    return(  
    <div>
        <div style={divStyle} className='Tab'>
            Hello
        </div> 
    </div>);
}}

function mapStateToProps(state){
    return{
        color: state.activeColor
    }
}
export default connect(mapStateToProps)(Tab1);
