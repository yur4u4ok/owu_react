import {axiosService} from "./axiosService";

const postService = {
    getAll: () => axiosService.get('/posts'),
    getById: (postId) => axiosService.get(`posts/${postId}`)
}

export{
    postService
}
