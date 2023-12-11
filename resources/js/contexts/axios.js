import axios from 'axios';

const defaultOptions = {
  baseURL: BASE_URL,
  timeout: 5000
}

let http = axios.create(defaultOptions);

http.interceptors.request.use(function (config) {
  // config.headers['x-token'] = 'mJnEHL2E9LSKkzdTyeUC_eD2ameSgDXWVwC9Zkdkv'

  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  return config;
});

const API = {
  getLanguageUrl: 'lg',
  changeLanguageUrl: 'change-lg',
  signInUrl: 'sign-in'
}

export {
  API,
}

export default http;