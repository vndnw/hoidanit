import axiosClient from './axiosClient';

const UserApi = {
    getUser: () => {
        const url = '/users';
        return axiosClient.get(url);
    },
    get: (id) => {
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },
    add: (data) => {
        const url = '/users';
        return axiosClient.post(url, data);
    },
    update: (data) => {
        const url = `/users/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove: (id) => {
        const url = `/users/${id}`;
        return axiosClient.delete(url);
    },
};
const postCreateUser = (data) => {
    const url = '/api/v1/participant';
    return axiosClient.postForm(url, data);
}
const putUpdateUser = (data) => {
    const url = '/api/v1/participant';
    return axiosClient.putForm(url, data);
}
const deleteUser = (id) => {
    const url = '/api/v1/participant';
    return axiosClient.delete(url, { 
        data: {
            id: id
        } 
    });
}
const getAllUser = () => {
    const url = '/api/v1/participant/all';
    return axiosClient.get(url);
}

const getUserWithPage = (page, limit) => {
    const url = '/api/v1/participant';
    return axiosClient.get(url, {params: {
        page,
        limit,
    }});
}
const postLogin = (email, password) => {
    const url = '/api/v1/login';
    return axiosClient.post(url, {
        email,
        password,
    });
}
const postRegister = (email, username, password) => {
    const url = '/api/v1/register';
    return axiosClient.post(url, {
        email,
        username,
        password,
    });
}

export { 
    postCreateUser,
    getAllUser, 
    getUserWithPage, 
    putUpdateUser, 
    deleteUser, 
    postLogin, 
    postRegister 
};