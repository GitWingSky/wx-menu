import axios from 'axios';

const service = axios.create();

service.interceptors.request.use(
    config => {
        config.url = localStorage.getItem('baseURL') + config.url;
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
