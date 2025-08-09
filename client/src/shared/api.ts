import type { AxiosInstance } from 'axios';
import axios from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});
