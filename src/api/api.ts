import axios from 'axios';
// import {API_URL} from '@env';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3001',
});

export {api};
