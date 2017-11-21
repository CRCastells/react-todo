import React, { Component } from 'react';
import EditTodoForm from './EditTodoForm'

export default class Todo extends Component {
	render(){
		return (
			<p data-todos-index={this.props.todo._id}>
      	<span>{this.props.todo.body}</span>
      	<span
          className='deleteButton'
          onClick={() => this.props.onDeleteTodo(this.props.todo)}>
            (X)
        </span>
       	<EditTodoForm onUpdateTodo={this.props.onUpdateTodo} todo={this.props.todo}/>
     	</p>
		)
	}
}