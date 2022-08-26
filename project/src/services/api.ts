import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import {StatusCodes} from 'http-status-codes';
import { BASE_URL, REQUEST_TIMEOUT } from '../constants/api';
import { processErrorHandle } from './process-error-handle';
import { getToken } from './token';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createSixCitiesApi = (): AxiosInstance => {
  const customAxios = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  customAxios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  customAxios.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        processErrorHandle(error.response.data.error);
      }

      throw error;
    }
  );

  return customAxios;
};
