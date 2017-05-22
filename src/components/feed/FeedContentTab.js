import React, { Component } from 'react';
import { View } from 'react-native';
import { Tabs, Tab } from 'native-base';

import styles from './styles';
import TabProduct from './TabProduct';
import TabStory from './TabStory';

class FeedContentTab extends Component {

	render () {
		return (
			<View style={styles.sectionContent}>
				<Tabs locked={true} tabBarUnderlineStyle={{ height: 2, backgroundColor: '#1ba39c' }}>
					<Tab heading="CERITA"
						tabStyle={{ backgroundColor: '#fff' }}
						textStyle={{ color: '#95989a' }}
						activeTabStyle={{ backgroundColor: '#fff' }}
						activeTextStyle={{ color: '#1ba39c', fontWeight: 'normal' }}>
						<TabStory></TabStory>
					</Tab>
					<Tab heading="KOTAK"
						tabStyle={{ backgroundColor: '#fff' }}
						textStyle={{ color: '#95989a' }}
						activeTabStyle={{ backgroundColor: '#fff' }}
						activeTextStyle={{ color: '#1ba39c', fontWeight: 'normal' }}>
						<TabProduct></TabProduct>
					</Tab>
				</Tabs>
			</View>
		)
	}

}

export default FeedContentTab;
