import axios from 'axios';
import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { BASE_URL, REQUEST_TIMEOUT } from '../constants/api';

export const performRequest = (config: AxiosRequestConfig): AxiosPromise => {
  const requestConfig = {
    ...config,
    BASE_URL,
    TIMEOUT_MILLIS: REQUEST_TIMEOUT
  };

  // prevent false method call
  if (config.data && config.method === 'GET') {
    const overridedConfig: AxiosRequestConfig = {
      ...requestConfig,
      method: 'POST',
    };

    return axios(overridedConfig);
  }

  return (
    axios(requestConfig)
  );
};
