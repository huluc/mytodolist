import {connect} from 'react-redux'
import { toggleTodo } from '../actions';
import { TodoList } from '../screens/TodoList';


const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
		case 'SHOW_ALL':
		default:
			return todos;
	}
};

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter),

	};
};
const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id));
		},
	};
};

const VisibleToDoList = connect(
	mapStateToProps,
	mapDispatchToProps
	)(TodoList)

export default  VisibleToDoList



