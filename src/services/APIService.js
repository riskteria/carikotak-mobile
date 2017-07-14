import axios from 'axios';
import store from 'react-native-simple-store';
import { API_URL } from 'react-native-dotenv';

export const API = axios.create({
	baseURL: API_URL,
	timeout: 12000,
	headers: {
		'Accept': 'application/json',
		'Content': 'application/json',
		'X-Requested-With': 'XMLHttpRequest'
	}
});
