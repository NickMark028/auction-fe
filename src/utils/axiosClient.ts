import axios from "axios";

const axiosClient = axios.create({
  timeout: 10000,
  baseURL: process.env.REACT_APP_BE_HOST,
  headers: {
    'Content-Type': 'application/json'
}
});

// axiosClient.interceptors.response.use((response) => {

// }, (error) => {
//     // Handle 401 here
// })

export default axiosClient;
