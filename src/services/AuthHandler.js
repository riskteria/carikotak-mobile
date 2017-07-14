import store from 'react-native-simple-store';

export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const onSignedIn = (access_token = null, refresh_token = null) => store
	.save(ACCESS_TOKEN, access_token)
	.then(() => store.save(REFRESH_TOKEN, refresh_token));


export const onSignedOut = () => store
	.delete(ACCESS_TOKEN)
	.then(store.delete(REFRESH_TOKEN))

export const isSignedIn = () => store.get(ACCESS_TOKEN);
