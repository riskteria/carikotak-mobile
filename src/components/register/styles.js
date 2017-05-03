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
		marginBottom: 24
	},
	controlLabel: {
		backgroundColor: 'transparent'
	},
	formControl: {
		backgroundColor: 'transparent'
	},
	lightText: {
		color: colors.colorLightOpacity,
		fontSize: 18
	},
	signInbutton: {
		color: colors.colorLightOpacity,
		fontSize: 16
	}
});

export default styles;
