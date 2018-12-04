/* @flow */

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddTodo from './containers/AddTodo';

type Props = {}

class TodoApp extends React.Component<Props> {

	render() {
		return (
			<View style={styles.container}>
				<AddTodo/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10
	},
});

export default TodoApp;
