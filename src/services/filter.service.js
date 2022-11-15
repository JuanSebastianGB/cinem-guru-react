import { axiosInterceptor } from '../utilities/axios';
import { baseUrl } from '../utilities/baseurl';

const routesUrl = {
  CUSTOM_FILTER: 'titles/advancedsearch',
};

export const getDataWithCustomFilter = async () => {
  const url = `${baseUrl}${routesUrl.CUSTOM_FILTER}`;
  try {
    return await axiosInterceptor.get(url);
  } catch (error) {
    throw error;
  }
};
