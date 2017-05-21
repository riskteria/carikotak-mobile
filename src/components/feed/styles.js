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
	},
	parentView: {
		backgroundColor: '#fff',
		flex: 1
	},
	container: {
		padding: 20
	},
	buttonFindTextInside: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20
	},
	buttonFindTextTitle: {
		fontSize: 14,
		color: colors.colorDark
	},
	buttonFindTextSubtitle: {
		fontSize: 10,
		color: colors.colorGrey
	},
	sectionContent: {
		marginBottom: 16
	}
});

export default styles;
