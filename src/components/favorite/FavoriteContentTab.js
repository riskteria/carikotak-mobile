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
				<Tabs locked={true} tabBarUnderlineStyle={{ height: 0 }}>
					<Tab heading="CERITA"
						tabStyle={{ backgroundColor: '#fff' }}
						textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#95989a' }}
						activeTabStyle={{ backgroundColor: '#fff' }}
						activeTextStyle={{ fontSize: 12, color: '#1ba39c', fontWeight: 'bold' }}>
						<TabStory></TabStory>
					</Tab>
					<Tab heading="KOTAK"
						tabStyle={{ backgroundColor: '#fff' }}
						textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#95989a' }}
						activeTabStyle={{ backgroundColor: '#fff' }}
						activeTextStyle={{ fontSize: 12, color: '#1ba39c', fontWeight: 'bold' }}>
						<TabProduct></TabProduct>
					</Tab>
				</Tabs>
			</View>
		)
	}

}

export default FeedContentTab;
