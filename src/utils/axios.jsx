import axios from 'axios';

const axiosInstance = new axios.create({
  baseURL: 'https://fakestoreapi.com/',
});


export default axiosInstance;