import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import jwtDecode from 'jwt-decode'
import moment from 'moment';

const defaultAxiosConfig: AxiosRequestConfig = {
  timeout: 10000,
  baseURL: process.env.REACT_APP_BE_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
}

const axiosClient = axios.create(defaultAxiosConfig);

// async function refreshUserToken() {
//   const requestData = {
//     accessToken: localStorage.getItem('auction-user-token') as string | null,
//     refreshToken: JSON.parse(localStorage.getItem('auction-user-data')).rfToken as string | null,
//   }
//   console.log(1);

//   if (requestData.accessToken === null || requestData.refreshToken === null)
//     return Promise.reject('Missing access token or refresh token');

//   console.log(2);

//   const newResponse = await axios.post('/api/auth/refresh', requestData, defaultAxiosConfig);

//   console.log(3);

//   const responseData = newResponse.data;
//   localStorage.setItem('auction-user-token', responseData.accessToken);
//   localStorage.setItem('auction-user-data', jwtDecode(responseData.accessToken));

//   return responseData.accessToken as string;
// }

axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = localStorage.getItem('auction-user-token') as string | null;

    if (accessToken) {
      config.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// axiosClient.interceptors.response.use(function (response) {
//   // Any status code that lie within the range of 2xx cause this function to trigger
//   // Do something with response data
//   return response;
// }, async function (error: AxiosError) {
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   const { config, response } = error as any;
//   console.log('w');

//   if (response.status === 401 && !config._retry) {
//     config._retry = true;
//     console.log('u');

//     const accessToken = await refreshUserToken();

//     console.log('v');


//     config.headers['authorization'] = `Bearer ${accessToken}`;
//     return await axios.request(config);
//   }
//   return Promise.reject(error);
// });

function loadTokens() {
  return {
    accessToken: localStorage.getItem('auction-user-token') as string | null,
    refreshToken: JSON.parse(localStorage.getItem('auction-user-data')).rfToken as string | null,
  }
}

function saveToken(accessToken: string) {
  localStorage.setItem('auction-user-token', accessToken);
}

// axiosClient.interceptors.response.use(createAxiosResponseInterceptor);

// function createAxiosResponseInterceptor() {
//   const interceptor = axiosClient.interceptors.response.use(
//     response => response,
//     error => {
//       // Reject promise if usual error
//       if (error.response.status !== 401) {
//         return Promise.reject(error);
//       }

//       /* 
//        * When response code is 401, try to refresh the token.
//        * Eject the interceptor so it doesn't loop in case
//        * token refresh causes the 401 response
//        */
//       axiosClient.interceptors.response.eject(interceptor);
//       const tokens = loadTokens();
//       return axiosClient.post('/api/auth/refresh', tokens)
//       .then(response => {
//         saveToken(response.data as string);
//         error.response.config.headers['authorization'] = 'Bearer ' + response.data.accessToken;
//         return axiosClient(error.response.config);
//       }).catch(error => {
//         localStorage.clear();
//         //this.router.push('/login');
//         //TODO: Redirect to login page
//         return Promise.reject(error);
//       }).finally(createAxiosResponseInterceptor);
//     }
//   );
// }

// let isRefreshing = false
// let refreshQueue: any[] = []
// const retries = 1

// axiosClient.interceptors.response.use((response) => {
//   return response;
// }, (error) => {

//   const { config: orgConfig, response: { status } } = error

//   orgConfig._retry = typeof orgConfig._retry === 'undefined' ? 0 : ++orgConfig._retry

//   if (orgConfig._retry === retries) {
//     return Promise.reject(error)
//   }

//   //Handle unauthorized token
//   if (status === 401) {
//     const refreshToken = localStorage.getItem('refreshToken')!;
//     const decodedToken = jwtDecode(refreshToken);

//     //console.log('decodedToken', decodedToken);
//     if (!refreshToken) {
//       const errorMessage = 'no-refresh-token';
//       return { message: errorMessage };
//     }

//     if (!decodedToken) {
//       const errorMessage = 'invalid-refresh-token';
//       return { message: errorMessage };
//     } else {
//       const isExpired = moment.unix((decodedToken as any).exp).diff(moment()) < 1;
//       if (isExpired) {
//         const errorMessage = 'expired-refresh-token';
//         return { message: errorMessage };
//       }
//     }

//     if (refreshToken && !isRefreshing) {
//       isRefreshing = true;

//       const configHeader: AxiosRequestConfig = {
//         headers: {
//           'Authorization': 'Bearer ' + refreshToken
//         }
//       }
//       axiosClient.post('/user/auth/token/refresh', undefined, configHeader)
//         .then(res => {
//           if (res.status === 500 && (res as any).message === 'refresh-token-fail') {
//             const errorMessage = 'refresh-token-fail';
//             isRefreshing = false;
//             return { message: errorMessage };
//           }
//           const accessToken = (res as any).payload.token;
//           localStorage.setItem('accessToken', accessToken);

//           refreshQueue.forEach((v) => v.resolve(res))
//           refreshQueue = []
//         })
//         .catch(err => {

//           refreshQueue.forEach((v) => v.reject(err))
//           refreshQueue = []
//         })
//         .finally(() => {
//           isRefreshing = false;
//         });
//     }

//     return new Promise((resolve, reject) => {
//       refreshQueue.push({
//         resolve: (res: any) => {
//           const config = _.merge(orgConfig, res)
//           config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
//           resolve(axiosClient.request(config))
//         },
//         reject: (err: any) => {
//           reject(err)
//         },
//       })
//     })
//   }

//   return Promise.reject(error);
// });

export default axiosClient;
