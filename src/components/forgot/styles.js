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
	signInbutton: {
		color: colors.colorLightOpacity,
		fontSize: 16
	},
	lightColor: {
		color: colors.colorLightOpacity,
		fontWeight: 'bold'
	},
	inputGroup: {
		marginBottom: 24
	},
	inputInstruction: {
		marginTop: 24,
		marginBottom: 24,
	},
	inputInstructionText: {
		fontSize: 18,
		color: colors.colorLightOpacity
	}
});

export default styles;
