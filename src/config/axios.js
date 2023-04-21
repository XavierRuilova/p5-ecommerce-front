import axios from "axios";

const clientAxios = axios.create({
    // baseURL: process.env.REACT_APP_BACKEND_URL,
    baseURL: 'http://localhost:4000'
    // baseURL: 'https://p5ecommerce-back.onrender.com'
})

export default clientAxios