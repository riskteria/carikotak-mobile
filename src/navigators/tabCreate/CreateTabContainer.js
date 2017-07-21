import React, { Component } from 'react';
import { Icon } from 'native-base';

import { addNavigationHelpers } from 'react-navigation';
import { CreateTabNavigator } from './CreateTabNavigator';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		navigationState: state.createTabNavigator
	}
}

class CreateTabContainer extends Component {

	static navigationOptions = {
		tabBarLabel: 'Pasang',
		tabBarIcon: ({ tintColor }) => (
			<Icon style={{ color: tintColor }} name="ios-add-circle-outline" />
		)
	}

	render() {
		const { dispatch, navigationState } = this.props;

		return (
			<CreateTabNavigator
				navigation={addNavigationHelpers({
					dispatch: dispatch,
					state: navigationState
				})}
			/>
		);
	}
}

export default connect(mapStateToProps)(CreateTabContainer);
