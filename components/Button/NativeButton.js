import React, { Component } from 'react';
import PropTypes from 'prop-types';//This library will be used to declare what types of properties the CustomButton will have.
import { TouchableOpacity, Text } from 'react-native';
import { nativeButtonStyles as styles } from './styles';

type propTypes = {
	text: string,
	onPress?: Function
};

class NativeButton extends Component<propTypes> {
	render() {
		const { text, onPress } = this.props;
		return (
			<TouchableOpacity style={styles.buttonStyle}
			                  onPress={() => onPress()}>
				<Text style={styles.textStyle}>{text}</Text>
			</TouchableOpacity>);
	}
}

// NativeButton.propTypes = {
// 	text: PropTypes.string,
// 	onPress: PropTypes.func.isRequired,
// };

export { NativeButton };
