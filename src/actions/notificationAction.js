import Pusher from 'pusher-js/react-native';
import {
  PUSHER_APP_KEY,
  PUSHER_APP_CLUSTER,
  API_URL
} from 'react-native-dotenv';

import { RECEIVE_NOTIFICATION } from 'constants/actionTypes';

export const newNotification = (dispatch, user) => {
  return {
    type: RECEIVE_NOTIFICATION,
    dispatch,
    user
  };
};

export function receiveNotifications(dispatch, user) {
  const socket = new Pusher(PUSHER_APP_KEY, {
    cluster: PUSHER_APP_CLUSTER,
    authEndpoint: `${API_URL}/broadcasting/auth`,
    encrypted: true
  });

  const channel = socket.subscribe('private.App.Models.User.' + user.id);

  channel.bind(
    'Illuminate.Notifications.Events.BroadcastNotificationCreated',
    e => {
      console.log(e);
    }
  );

  channel.bind(
    'Illuminate\\Notifications\\Events\\BroadcastNotificationCreated',
    e => {
      console.log(e);
    }
  );

  channel.bind('BroadcastNotificationCreated', e => {
    console.log(e);
  });

  channel.bind_global(function(event, data) {
    console.log(`The event ${event} was triggered with data ${data}`);
  });
}
