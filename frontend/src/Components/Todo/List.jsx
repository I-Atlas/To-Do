import React from 'react'
import { connect } from 'react-redux'
import { Paper } from '@material-ui/core'
import { fetchTodos } from '../Actions/Actions'

import Todo from './Todo'

class List extends React.Component {
    componentDidMount() {
        this.props.fetchTodos()
    }
    render () {
        const { todos } = this.props
        return (
            <Paper elevation={2} className="list">
                <ul>
                    { todos && todos.map(todo => {
                        return <Todo key={todo._id} todo={todo} />
                            }
                        )
                    }
                </ul>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

export default connect(mapStateToProps, { fetchTodos })(List)