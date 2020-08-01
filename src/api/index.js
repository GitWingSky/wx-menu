import request from '../utils/request';

export const login = data => {
    return request({
        headers: {
            'Content-Type': 'application/json'
        },
        url: './michael/sys/user/login',
        method: 'post',
        data: data
    });
};
export const getMenu = data => {
    return request({
        url: './michael/wx/menu/get',
        method: 'post',
        params: data
    });
};
export const updateMenu = data => {
    return request({
        headers: {
            'Content-Type': 'application/json'
        },
        url: './michael/wx/menu/menuCreate',
        method: 'post',
        data: data
    });
};