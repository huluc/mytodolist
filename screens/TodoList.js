import React, { Component } from 'react';
import TodoObject from './TodoObject';

type todo = [
	{
		id: number,
		text: string,
		completed: boolean,
	}];
type Props = { todos: Array<todo>, onTodoPress: Function };

class TodoList extends Component<Props> {
	render() {
		const {todos, onTodoPress} = this.props;
		return (
			todos.map(todo => <TodoObject key={todo.id} {...todo} onPress={() => onTodoPress(index)} />)
		);
	}
}

export { TodoList };
