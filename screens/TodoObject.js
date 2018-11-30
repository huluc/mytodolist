import React, { Component } from 'react';
import { Text } from 'react-native';

type props = {
	text: string,
	completed: boolean,
	onPress: Function,
}

export default class todoObject extends Component<props> {
	render() {
		const { text, completed, onPress } =this.props;
		console.log("props:",this.props)
		return (
			<Text onPress={onPress} style={{ textDecorationLine: completed ? 'line-through' : 'none' , backgroundColor:'white'} }>{text}</Text>
		);
	}
}
