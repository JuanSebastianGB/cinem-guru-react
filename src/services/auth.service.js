import axios from 'axios';
import { axiosInterceptor } from '../utilities/axios';

const baseUrl = 'http://localhost:8000/api/';
const routesUrl = {
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  AUTH: 'auth',
};

export const loginService = async (body) => {
  const url = `${baseUrl}${routesUrl.LOGIN}`;
  try {
    return await axios.post(url, body);
  } catch (error) {
    return `${error.message} ${error.response.statusText}`;
  }
};
export const registerService = async (body) => {
  const url = `${baseUrl}${routesUrl.REGISTER}`;
  try {
    return await axios.post(url, body);
  } catch (error) {
    return `${error.message} ${error.response.statusText}`;
  }
};

export const authService = async () => {
  const url = `${baseUrl}${routesUrl.AUTH}`;
  try {
    return await axiosInterceptor.post(url);
  } catch (error) {
    throw error;
    // return `${error.message} ${error.response.statusText}`;
  }
};
