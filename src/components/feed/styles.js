import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

const styles = StyleSheet.create({
	cardContainer: {
		marginTop: 8,
		marginBottom: 8,
		backgroundColor: '#f4f4f4'
	},
	tabProductSection: {
		paddingBottom: 16,
		borderBottomWidth: 1,
		borderBottomColor: colors.colorAlmostLight
	},
	tabProductSectionTop: {
		paddingTop: 16,
		paddingBottom: 16,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	tabProductSectionLink: {
		fontSize: 14,
		color: colors.colorAccent
	},
	cardProductContainer: {
		marginRight: 16,
		backgroundColor: '#ffffff',
		width: 180
	},
	cardStoryHeader: {
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 16,
		paddingRight: 16,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	cardStoryHeaderName: {
		paddingLeft: 8,
		paddingRight: 8,
		fontSize: 16,
		fontWeight: 'bold'
	},
	cardStoryFooter: {
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 16,
		paddingRight: 16
	},
	cardStoryTitle: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	cardStoryDescription: {
		fontSize: 14,
		color: colors.colorGrey
	},
	cardProductFooter: {
		paddingTop: 8,
		paddingBottom: 8
	},
	cardProductFooterCol: {
		paddingTop: 1.6,
		paddingBottom: 1.6,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	cardProductName: {
		fontWeight: 'bold'
	},
	cardProductOwner: {
		//
	},
	cardProductStatus: {
		//
	},
	cardProductPrice: {
		//
	},
	cardProductLocation: {
		//
	},
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
		backgroundColor: colors.colorLight,
		flex: 1
	},
	container: {
		padding: 16
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
