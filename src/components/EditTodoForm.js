import React, {Component} from 'react';

export default class EditTodoForm extends Component {

	constructor(props){
		super(props);
		this.state = {
			updatedTodoBody: ''
		};
	}

	onInputChange(event){
    this.setState({
      updatedTodoBody: event.target.value
    });
	}

	onFormSubmit(event){
		event.preventDefault();
		let todo = {
			_id: this.props.todo._id,
			body: this.state.updatedTodoBody,
			completed: this.props.todo.completed
		};
		this.props.onUpdateTodo(todo);
	  this.setState({
	    updatedTodoBody: ''
	  });
	}

	render() {
		return (
			<div className='editTodoForm' data-todos-index={this.props.todo._id}>
        <form onSubmit={event=>this.onFormSubmit(event)}>
          <input
          	onChange={event => this.onInputChange(event)}
            placeholder='Write updated todo here...'
            type='text'
            value={this.state.updatedTodoBody} />
          <button type='submit'>Update Todo!</button>
        </form>
      </div>
		)
	}
}