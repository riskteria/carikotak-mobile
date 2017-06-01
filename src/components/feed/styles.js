import {
	StyleSheet
} from 'react-native';

import colors from 'styles/_colors';

const styles = StyleSheet.create({
	cardContainer: {
		marginTop: 8,
		marginBottom: 8,
		paddingBottom: 16,
		borderBottomWidth: 1,
		borderBottomColor: colors.colorBorderLight
	},
	tabSection: {
		flex: 1
	},
	tabProductSectionTop: {
		padding: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	tabProductSectionLabel: {
		fontSize: 18,
		color: colors.colorDark
	},
	tabProductSectionLink: {
		fontSize: 12,
		color: colors.colorAccent
	},
	tabStyle: {
		backgroundColor: colors.colorLight
	},
	tabTextStyle: {
		fontSize: 14,
		fontWeight: 'bold',
		color: colors.colorGrey
	},
	tabActiveTextStyle: {
		fontSize: 14,
		fontWeight: 'bold',
		color: colors.colorAccent
	},
	tabUnderlineStyle: {
		height: 1,
		backgroundColor: colors.colorAccent
	},
	productListHorizontal: {
		flexDirection: 'row',
		paddingRight: 8,
		paddingLeft: 8,
		borderBottomWidth: 1,
		paddingBottom: 16,
		borderBottomColor: colors.colorBorderLight
	},
	cardProductContainer: {
		marginLeft: 8,
		marginRight: 8,
		backgroundColor: colors.colorLight,
		width: 200
	},
	cardStoryDeckContainer: {
		height: 'auto',
		minHeight: 275,
		marginTop: 14,
		paddingLeft: 16,
		paddingRight: 16
	},
	cardStoryContainer: {
		height: 250,
		elevation: 0,
		borderRadius: 10,
		backgroundColor: '#000'
	},
	cardStoryImageBackground: {
		position: 'absolute',
		left: 0,
		right: 0,
		borderRadius: 10,
		top: 0,
		bottom: 0,
		opacity: 0.5
	},
	cardStoryHeaderName: {
		paddingLeft: 8,
		paddingRight: 8,
		fontSize: 14,
		fontWeight: 'bold',
		color: colors.colorAlmostLight
	},
	cardStoryTitle: {
		fontSize: 22,
		fontWeight: 'bold',
		color: colors.colorAlmostLight
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
		color: colors.colorDark,
		fontSize: 16,
		fontWeight: '500'
	},
	cardProductOwner: {
		fontSize: 12,
		color: colors.colorGrey
	},
	cardProductStatus: {
		fontSize: 12,
		color: colors.colorGrey
	},
	cardProductPrice: {
		color: colors.colorAccent,
		fontWeight: 'bold'
	},
	cardProductLocation: {
		fontWeight: 'bold',
		color: colors.colorDark
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
		paddingTop: 16,
		paddingBottom: 16
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
	sectionFindMyBox: {
		paddingLeft: 16,
		paddingRight: 16,
		marginBottom: 16
	},
	sectionContent: {
		marginBottom: 16
	}
});

export default styles;
