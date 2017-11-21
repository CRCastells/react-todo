import React , { Component } from 'react';
import TodoModel from '../models/Todo';
import TodoList from '../components/TodoList';
import CreateTodoForm from '../components/CreateTodoForm';

export default class TodosContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			todos: []
		};
	}

	componentDidMount(){
		this.fetchData();
	}

	fetchData(){
		TodoModel.all().then( (res) => {
      this.setState ({
        todos: res.todos
      });
    });
	}

	createTodo(newBody){
		let newTodo = {
			body: newBody,
			completed: false
		};
		TodoModel.create(newTodo).then(res => {
			console.log('created todo', res);
	    let todos = this.state.todos;
	    let newTodos = todos.push(res);
	    this.setState({newTodos});
		});
	}

	deleteTodo(todo){
		console.log('deleting todo', todo);
  	TodoModel.delete(todo).then((res) => {
			let todos = this.state.todos.filter(function(todo) {
				return todo._id !== res._id;
			});
			this.setState({todos});
		});
	}

	updateTodo(todo){
		TodoModel.update(todo).then(res => {
			let todos = this.state.todos;
			for(let i =0; i< todos.length; i++){
				if (todos[i]._id === res._id) todos[i] = res;
			}
			this.setState({todos});
		});
	}

	render() {
		return (
			<div className='todos-container'>
      	<h2>This is the todos container</h2>
				<CreateTodoForm createTodo={this.createTodo.bind(this)} />      
        <TodoList todos={this.state.todos} onDeleteTodo={this.deleteTodo.bind(this)} onUpdateTodo={this.updateTodo.bind(this)}/>
      </div>
		)
	}
}