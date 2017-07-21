import React, { Component } from 'react';

import { addNavigationHelpers } from 'react-navigation';
import { MainTabNavigator } from './MainTabNavigator';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		navigationState: state.mainTabNavigator
	};
};

class MainTabContainer extends Component {

	static navigationOptions = {
		header: null,
		title: 'CARIKOTAK',
		headerLeft: null,
		headerTitleStyle: {
			alignSelf: 'center',
			textAlign: 'center'
		}
	}

	render() {
		const { dispatch, navigationState } = this.props;

		return (
			<MainTabNavigator
				navigation={ addNavigationHelpers({
					dispatch: dispatch,
					state: navigationState
				}) }
			/>
		);
	}

}

export default connect(mapStateToProps)(MainTabContainer);
