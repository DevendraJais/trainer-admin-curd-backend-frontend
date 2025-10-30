// Centrailzed API URL 

import axios from 'axios';

const api = axios.create({
    baseURL : "https://trainer-admin-curd-backend-frontend-3.onrender.com/api"
})

export default api;