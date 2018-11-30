import React, { Component } from 'react';
import TodoObject from './TodoObject';

type todo =[
	{
		id: number,
		text: string,
		completed: boolean,
	}];
type todos = Array<todo>;

class TodoList extends Component<todos> {
	render() {
		return (
			todos.map(todo=><TodoObject key={todo.id}></TodoObject>)
		)
	}
}
export {TodoList};
