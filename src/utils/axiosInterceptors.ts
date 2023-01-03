import {api} from '../api';
import {getCurrentFirebaseToken, logOut} from './firebase';

const axiosInterceptors = () => {
  api.interceptors.request.use(
    async req => {
      const authorization = await getCurrentFirebaseToken();
      if (authorization) {
        req.headers = {
          ...req.headers,
          authorization,
        };
      }
      return req;
    },
    error => {
      Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    res => {
      if (res.data.statusCode === 401 || res.data.error === 'Unauthorized') {
        logOut();
      }
      return res;
    },
    err => {
      if (
        err?.response?.data.statusCode === 401 ||
        err?.response?.data.error === 'Unauthorized'
      ) {
        return logOut();
      }
      return Promise.reject(err.message);
    },
  );
};

export default axiosInterceptors;
