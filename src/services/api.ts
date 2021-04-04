import axios from 'axios';

const prod = 'https://www.medway.com.br/wp-json/acf/v3/';
const dev = 'http://local.medway/wp-json/acf/v3/';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? dev : prod,
});

export default api;
