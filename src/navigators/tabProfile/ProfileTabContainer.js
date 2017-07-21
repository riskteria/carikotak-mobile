import React, { Component } from 'react';
import { Icon } from 'native-base';

import { addNavigationHelpers } from 'react-navigation';
import { ProfileTabNavigator } from './ProfileTabNavigator';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		navigationState: state.profileTabNavigator
	};
};

class ProfileTabContainer extends Component {

	static navigationOptions = {
		tabBarLabel: 'Profil',
		tabBarIcon: ({ tintColor }) => (
			<Icon style={{ color: tintColor }} name="ios-person" />
		)
	}

	render() {
		const { dispatch, navigationState } = this.props;

		return (
			<ProfileTabNavigator
				navigation={addNavigationHelpers({
					dispatch: dispatch,
					state: navigationState
				})}
			/>
		);
	}

}

export default connect(mapStateToProps)(ProfileTabContainer);
