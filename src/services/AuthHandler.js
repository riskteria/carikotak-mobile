import store from 'react-native-simple-store';

export const AUTHORIZATION_KEY = 'AUTHORIZATION_KEY';

export const onSignedIn = (key) => store.save(AUTHORIZATION_KEY, key);

export const onSignedOut = () => store.delete(AUTHORIZATION_KEY);

export const isSignedIn = () => store.get(AUTHORIZATION_KEY);
