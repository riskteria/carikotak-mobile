import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

import store from '../store';

// const accessToken = () => store.getState().authSessionHandler.access_token;

const accessToken = () =>
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE5ZTgzZWIwYTliZjllZmY5MjMzNzhkZTQyM2I4ZTQyMjY3MDRkNGE5NDhmYzNhYTVlZDk5M2M3ZjkzZWY5OGVmYzk0OTFmZjMwMWMxNjRmIn0.eyJhdWQiOiIyIiwianRpIjoiMTllODNlYjBhOWJmOWVmZjkyMzM3OGRlNDIzYjhlNDIyNjcwNGQ0YTk0OGZjM2FhNWVkOTkzYzdmOTNlZjk4ZWZjOTQ5MWZmMzAxYzE2NGYiLCJpYXQiOjE1MDE0ODUxMjksIm5iZiI6MTUwMTQ4NTEyOSwiZXhwIjoxNTAyNzgxMTI5LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.Bop8E3PwBxAVWeZFid_omrTrs2Uf0_UGY0270GqLCmeMh5WwepDHMydoyXy-ef2JsmUmFP1lJjRyPVZdbw3NlayzINUFZhrlbU0tvoS9NMa6cyKV30sv-WdmxdM_W9HaxpgCDBsUuFUQGuf5zJw3OzT9edNCv-8RMEBsN0jhTIZlSfYYfiGX9o-NjOIMOz_sTLnfT86i10bvnvnx4QMxcw7CciLZ09dpudYuGHBgR0etEvOeQhQk5ecm_H6FiCjanLVIOjJtA6hzokkMuXTmqfr9aKzN183K8vEQoSG71YOLs6_ebe6ooZqne14FPpNkV2mWyipMkhnz60V_iPp7Z0GSBvnoWbsmRw9v4LeyO1t8WyTZGYq8VPojLBBEGikq5xZbZYsOtWfAzu4JbjwIanfJXIdsn8Y9jT5LSHlOQJnHbw29BbeITssbyLtzvs8wDup3QBNANCN4O0G3GGJlZA6zFaTEFw23RUfEltCl73BIrBXifcXHu0u2JnF3_Z0rl6uGmXtz9TYPYTypU6ZXjDFXm3lK7fTHfxgmhTZgN1KHpzZry3yNVGVKEZrn0-gLcwjosXlgUGPi0zQnuk7wn8QTYEWc37icYBZxcRdttqRmhcNjYS5xhbtOV0FEX6ilmUWnU5alDdbDB8wGL3EP7Gw5UPunrZESOWE8OsVUK8Y';

export const API = axios.create({
  baseURL: API_URL,
  timeout: 120000,
  headers: {
    Accept: 'application/json',
    Content: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: 'Bearer ' + accessToken()
  }
});
