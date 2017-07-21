import React, { Component } from 'react';
import { Icon } from 'native-base';

import { addNavigationHelpers } from 'react-navigation';
import { FeedTabNavigator } from './FeedTabNavigator';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		navigationState: state.feedTabNavigator
	};
};

class FeedTabContainer extends Component {

	static navigationOptions = {
		tabBarLabel: 'Beranda',
		tabBarIcon: ({ tintColor }) => (
			<Icon style={{ color: tintColor }} name="ios-home-outline" />
		)
	}

	render() {
		const { dispatch, navigationState } = this.props;

		return (
			<FeedTabNavigator
				navigation={addNavigationHelpers({
					dispatch: dispatch,
					state: navigationState
				})}
			/>
		)
	}

}

export default connect(mapStateToProps)(FeedTabContainer);
