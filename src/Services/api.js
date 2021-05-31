import axios from 'axios';
import md5 from 'md5';

const apiKey = '0875f1dd2ee92e821129412cbf4fe10e'
const privateKey = '8e69ddaea2285077bb243174d6356c072eec1e0a'
const ts = Number(new Date());

const hash = md5(ts + privateKey+ apiKey);

const api = axios.create({
  baseURL : 'https://gateway.marvel.com:443/v1/public',
  method: 'GET',
  params: {
  "apikey": apiKey,
  "ts": ts,
  "hash": hash,
},
Headers: {
  Accept: 20
}})

export default api;