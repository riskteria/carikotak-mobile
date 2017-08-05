import Pusher from 'pusher-js/react-native';
import { PUSHER_APP_KEY, PUSHER_APP_CLUSTER } from 'react-native-dotenv';

const socket = new Pusher(PUSHER_APP_KEY, {
  cluster: PUSHER_APP_CLUSTER,
  authEndpoint: 'broadcast/auth',
  encrypted: true
});

socket.subscribe('');

export default socket;
