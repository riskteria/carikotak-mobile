import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

export const API = axios.create({
	baseURL: API_URL,
	timeout: 12000,
	headers: {
		'Accept': 'application/json',
		'X-Requested-With': 'XMLHttpRequest'
	}
});
