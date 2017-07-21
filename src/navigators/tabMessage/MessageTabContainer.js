import React, { Component } from 'react';
import { Icon } from 'native-base';

import { addNavigationHelpers } from 'react-navigation';
import { MessageTabNavigator } from './MessageTabNavigator';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		navigationState: state.messageTabNavigator
	};
};

class MessageTabContainer extends Component {

	static navigationOptions = {
		tabBarLabel: 'Pesan',
		tabBarIcon: ({ tintColor }) => (
			<Icon style={{ color: tintColor }} name="ios-mail-outline" />
		)
	}

	render() {
		const { dispatch, navigationState } = this.props;

		return (
			<MessageTabNavigator
				navigation={addNavigationHelpers({
					dispatch: dispatch,
					state: navigationState
				})}
			/>
		);
	}
}

export default connect(mapStateToProps)(MessageTabContainer);
