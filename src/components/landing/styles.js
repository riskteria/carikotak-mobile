import { StyleSheet } from 'react-native';

import colors from '../../styles/_colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.colorAccent,
		padding: 20,
		paddingBottom: 48
	},
	logoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		marginTop: 8,
		marginBottom: 8
	},
	lightText: {
		color: colors.colorLightOpacity,
		fontSize: 16
	},
	topContainer: {
		alignSelf: 'stretch'
	},
	signInButton: {
		textAlign: 'right',
		color: colors.colorLightOpacity,
		fontSize: 16
	},
	logoText: {
		fontSize: 32,
		color: colors.colorLightOpacity
	},
	logo: {
		width: 300,
		height: 50
	}
});

export default styles;
