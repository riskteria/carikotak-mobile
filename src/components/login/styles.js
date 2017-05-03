import { StyleSheet } from 'react-native';

import colors from '../../styles/_colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1ba39c',
		padding: 20,
		paddingTop: 64,
		paddingBottom: 48
	},
	formGroup: {
		backgroundColor: 'transparent'
	},
	controlLabel: {
		backgroundColor: 'transparent'
	},
	formControl: {
		backgroundColor: 'transparent'
	},
	signInbutton: {
		color: colors.colorLightOpacity,
		fontSize: 16
	}
});

export default styles;
