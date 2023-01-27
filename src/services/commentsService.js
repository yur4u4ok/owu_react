import {axiosService} from "./axiosService";

const commentsService = {
    getAll: () => axiosService.get('/comments')
}

export {
    commentsService
}
