import React, {Component} from 'react'
import {connect} from 'react-redux'
import AddColor from './AddColor'

import Color from './Color'

class Tab2 extends Component{

    createList(){
        return this.props.colors.map((color) => {
            return(
                <Color
                key={color.id} 
                color={color}
                />
            )
        });
    }

    render(){
    return (
        <div>
            {this.createList()}
            <AddColor />
        </div>
    )
}
}

function mapStateToProps(state){
    return{
        colors: state.colors
    }
}

export default connect(mapStateToProps)(Tab2);