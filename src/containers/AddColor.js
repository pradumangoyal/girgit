import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addColor} from '../actions'

class AddColor extends Component{
    constructor(props){
        super(props)
        this.state = {
            color: '#ffffff',
            bg: '#ffffff',
            text: '#ffffff'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }
    handleSubmit(e){
        this.props.AddColor(this.state.color ,this.state.bg, this.state.text)
        this.setState = ({
            color: '#ffffff',
            bg: '#ffffff',
            text: '#ffffff'
        })
    }
    render(){
        return(
            <Form>
                <Form.Field>
                    <label>Display Color</label>
                    <input type='color' value={this.state.color} onChange={this.handleChange} name='color'/>
                </Form.Field>
                <Form.Field>
                    <label>Text Color</label>
                    <input type='color' value={this.state.text} onChange={this.handleChange} name='text'/>
                </Form.Field>
                <Form.Field>
                    <label>Background Color</label>
                    <input type='color' value={this.state.bg} onChange={this.handleChange} name='bg' />
                </Form.Field>
                <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
                </Form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        AddColor: addColor
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddColor)