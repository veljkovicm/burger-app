import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-app-vm.firebaseio.com/',
});

export default instance;