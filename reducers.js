//https://redux.js.org/basics/reducers
import { combineReducers } from 'redux';
import {store} from './index'
import {
	VisibilityFilters,
	addTodo,
	setVisibilityFilter,
	toggleTodo,
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
} from './actions';
console.log("VisibilityFilters:",VisibilityFilters);
const initialState =
	{
		visibilityFilter: VisibilityFilters.SHOW_ALL,
		todos: [],
	};

function todos(state = [], action) {
	console.log("action",action);
	switch (action.type) {
		case ADD_TODO:
			//new state
			return [
				...state,
				{
					text: action.text,
					completed: false,
				},
			];

		case TOGGLE_TODO:
			return state.map((todo, index) => {
				if (index === action.index) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});
		default:
			return state;
	}
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return {
				...state,
				visibilityFilter: action.filter,
			};
		default:
			return state;
	}

}


const todoApp = combineReducers(
	{
		visibilityFilter,
		todos,
	});

export default todoApp;




//These statements are the same.
/*
export function todoApp(state = {}, action) {
	return {
		visibilityFilter: visibilityFilter(state, action),
		todos: todos(state.todos, action),
	};
}
export default todoApp;

const todoApp = combineReducers(
	{
		visibilityFilter,
		todos,
	});
*/

/*export function todoApp(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			//new state
			return {
				...state,
				todos: [
					...state.todos,
					{
						text: action.text,
						completed: false,
					}],
			};
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map((todo, index) => {
					if (index === action.index) {
						return { ...todo, completed: !todo.completed };
					}
					return todo;
				}),

			};

		case SET_VISIBILITY_FILTER:
			return {
				...state,
				visibilityFilter: action.filter,
			};
		default:
			state;
	}
}
*/
