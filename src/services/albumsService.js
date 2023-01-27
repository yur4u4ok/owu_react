import {axiosService} from "./axiosService";

const albumsService = {
    getAll: () => axiosService.get('albums')
}

export{
    albumsService
}
