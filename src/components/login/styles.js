import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1ba39c',
		padding: 20,
		paddingTop: 64,
		paddingBottom: 48
	},
	inputGroup: {
		marginBottom: 24
	},
	signInbutton: {
		color: colors.colorLightOpacity,
		fontSize: 16
	},
	lightColor: {
		color: colors.colorLightOpacity,
		fontWeight: 'bold'
	},
	forgotPassword: {
		textAlign: 'center',
		fontSize: 12,
		color: colors.colorLightOpacity,
		textDecorationLine: 'underline',
		fontWeight: '100'
	}
});

export default styles;
