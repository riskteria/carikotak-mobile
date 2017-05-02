import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1ba39c',
		padding: 16
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
		color: '#FFFFFF',
		fontSize: 18
	}
});

export default styles;
