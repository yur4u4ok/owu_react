import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const postService = {
    getAll: () => axiosService.get(urls.posts)
}

export {
    postService
}
