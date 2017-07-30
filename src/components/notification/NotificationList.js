import React, { Component } from 'react';
import { View } from 'native-base';

import NotificationCard from './NotificationCard';

class NotificationList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, notifications } = this.props;
    const navigate = navigation;

    const ListNotificationCard = [1].map((data, index) =>
      <NotificationCard data={data} key={index} navigate={navigate} />
    );

    return (
      <View>
        {ListNotificationCard}
      </View>
    );
  }
}

export default NotificationList;
