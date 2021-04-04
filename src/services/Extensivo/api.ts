import axios from 'axios';

const prod = 'https://extensivo.medway.com.br/wp-json/acf/v3/';
const dev = 'http://local.medway/wp-json/acf/v3/';

const apiExtensivo = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? dev : prod,
});

export default apiExtensivo;
