/* @flow */

import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

type Props = {}

class AddTodo extends React.Component<Props> {
	state = {
		text: '',
	};

	addTodo = (text) => {
		//Here we'll update our reduct store. We're going to have to redux store
		this.props.dispatch({ type: 'ADD_TODO', text });
	};

	render() {
		return (
			<View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
				<TextInput
					onChange={(text) => this.setState({ text })}
					value={this.state.text}
					placeholder="Create New Todo"
					style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', flex: 1 }}
				/>
				<TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
					<View style={{
						height: 50,
						backgroundColor: '#eaeaea',
						alignItems: 'center',
						justifyContent: 'center',
						marginHorizontal: 10,
					}}>
						<Icon name="md-add" size={30} style={{ padding: 5 }} />
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginHorizontal: 20,
	},
});

export default connect()(AddTodo);
