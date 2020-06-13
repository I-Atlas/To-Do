import React from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../Actions/Actions'
import TextField from '@material-ui/core/TextField';


class AddTodo extends React.Component {
    constructor (props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        if (e.key === 'Enter') {
            this.props.createTodo(e.target.value)
            e.target.value = ''
        }
    }

    render () {
        return (
            <TextField label="Add a task" color="secondary" margin="normal" onKeyPress={this.handleSubmit} />
        )
    }
}


export default connect(null, { createTodo })(AddTodo)