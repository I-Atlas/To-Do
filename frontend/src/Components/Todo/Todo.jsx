import React from 'react'
import { connect } from 'react-redux'
import { Button } from "@material-ui/core";
import { deleteTodo, completeTodo, updateTodo } from '../Actions/Actions'

class Todo extends React.Component {
    constructor (props) {
        super(props)
        
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleComplete = this.handleComplete.bind(this)
    }

    handleDelete () {
        this.props.deleteTodo(this.props.todo._id)
    }

    handleUpdate () {
        this.props.updateTodo(this.props.todo._id)
    }

    handleComplete () {
        this.props.completeTodo(this.props.todo._id)
    }

    render () {
        const { todo } = this.props
        return (
            <li className={todo.isCompleted ? 'checked' :  ''}>
                <span onClick={this.handleComplete}><Button className="todo-text">{todo.text}</Button></span>
                <span onClick={this.handleDelete} className="close"><Button variant="contained" color="secondary"> <i className="material-icons">delete</i></Button></span>
            </li>
        )
    }
}

export default connect(null, { deleteTodo, completeTodo })(Todo)