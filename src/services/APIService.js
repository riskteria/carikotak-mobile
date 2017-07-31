import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import store from 'react-native-simple-store';

let accessToken = null;

store.get('ACCESS_TOKEN').then(res => {
  accessToken = res;
  alert('token ' + accessToken);
});

alert(accessToken);

// const accessToken =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU3M2RmMTZiZDA5MDFlZjQxYmFlYzBkODhkYWRmZmNiMzYwYTIzYTNiMzliOTI4Zjc0OGQxOTk0NjBlMTcyOWMxODI5NDZiNTFlMzQ0NzJkIn0.eyJhdWQiOiIyIiwianRpIjoiNTczZGYxNmJkMDkwMWVmNDFiYWVjMGQ4OGRhZGZmY2IzNjBhMjNhM2IzOWI5MjhmNzQ4ZDE5OTQ2MGUxNzI5YzE4Mjk0NmI1MWUzNDQ3MmQiLCJpYXQiOjE1MDEwNDQ2MjUsIm5iZiI6MTUwMTA0NDYyNSwiZXhwIjoxNTAyMzQwNjI0LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.uztcUvuoyHAsYMVselmTtIZrndzMgxm-PspQr9wo1A4m5LArMxMMl2vK3iCzHixuan7SFV6C2OmZPvSAMkeusYtwC7VVdje2WlbWvqevIzJUM88DUPEEti16RI5x7tCjUj8JaslHFPSJ3sAAuxmDlLyl88uB0Six3TcueZvP4TeaPe5pfr4redj-SHvDPWZC9ycY8pN5BI_2mKya5wXfDdzDmbLFpEbh31psg-ifWg6LEQSso1iI_S3Eob_R7y-aV1yQ5XTeeLQGtvpj7A6eTSyfkmu9_Sk2r_4uXRiolrzYr35SyAOuUokqNSXk34Vok81RuZTXraVlLigI5pLYxTQ8UCp0j4egnT2-6E_DgsDFzUAAxecld9cltBnnJQZMOZIJKMzbb3RnxOkjtqteJ0nN9YZ5TTKjCkk3HiMW7C2SB15eAC-4v4yDMbwbxQLKuk2F32XgnILWJOh81H6JRF9oFn_aTPXzBXXZfMxQYKcLwSy2z6etl2SHjOSbn-iF9On66uQ4cPWZygu3zeYCR8TEeM5GqiH2CHCZFtXhE853YXQQ6_pKJ-Xfi_aKx_ZcXueYYw9rgh9MQhFo_C__ATbTfmgiqIlSlXlNyMp9fEOrJXVX5aUwQlbsH3g5quqw90NXBYSyB8-UgHgVEgw8kolqM_zIueCTcE0bpAln6Rc';

export const API = axios.create({
  baseURL: API_URL,
  timeout: 120000,
  headers: {
    Accept: 'application/json',
    Content: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: 'Bearer ' + accessToken
  }
});
