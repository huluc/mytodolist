import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeButton } from '../components/Button';
import TodoObject from './TodoObject';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.addTodo}>
					<TextInput style={styles.todoText} />
					<NativeButton text={'Add'} onPress={() => {
					}} />
				</View>
				<View style={styles.todoList}>
					<TodoObject text={'aa'} completed={true} onPress=onPress={() => {
}}/>
				</View>
				<View style={styles.visibilityFilter}>

				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	addTodo: {
		flex: 1,
		flexDirection: 'row',
	},
	todoText: {
		flex: 2,
		borderColor: 'red',
		borderWidth: 2,
		borderRadius: 20,
		backgroundColor: 'pink',
	},
	container: {
		flex: 1,
		backgroundColor: 'yellow',
	},
	todoList: {
		flex: 5,
		backgroundColor: 'green',
	},
	visibilityFilter: {
		flex: 1,
		backgroundColor: 'red',
	},
});
