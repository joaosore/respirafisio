import axios from 'axios';

const prod = 'https://api.analisededados.medway.com.br/';
const dev = 'http://127.0.0.1:3333';

const apiAnaliseDeDados = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? dev : prod,
});

export default apiAnaliseDeDados;
