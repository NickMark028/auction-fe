import axios from "axios";

const axiosClient = axios.create({
    timeout: 15000,
    baseURL: 'http://localhost:3000'
})

// axiosClient.interceptors.response.use((response) => {

// }, (error) => {
//     // Handle 401 here
// })

export default axiosClient;
