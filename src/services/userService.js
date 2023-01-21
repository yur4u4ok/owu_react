import {axiosService} from "./axiosService";

const userService = {
    getAll: () => axiosService.get('/users'),
    getPostByUserId: (id) => axiosService.get(`/users/${id}/posts`)
}

export{
    userService
}
