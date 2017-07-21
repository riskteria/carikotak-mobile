import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { MainNavigator } from './MainNavigator';

const mapStateToProps = (state) => {
	return {
		navigationState: state.mainNavigator
	};
};

class AppNavigator extends Component {

	render() {
		const { dispatch, navigationState, isSignedIn } = this.props;

		const MainNavigatorWithState = MainNavigator(isSignedIn);

		return (
			<MainNavigatorWithState
				navigation={
					addNavigationHelpers({
						state: navigationState,
						dispatch: dispatch
					})
				}
			/>
		);
	}

}

export default connect(mapStateToProps)(AppNavigator);
