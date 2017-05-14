import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

const styles = StyleSheet.create({
	slideWrapper: {
		flex: 1
	},
	slideInner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.colorAccent
	},
	slideText: {
		color: colors.colorLight,
		fontSize: 24,
		fontWeight: '100'
	}
});

export default styles;
