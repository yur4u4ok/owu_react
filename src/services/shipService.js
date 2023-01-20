import {axiosService} from "./axiosService";

const shipService = {
    getAll: () => axiosService.get('')
}

export {
    shipService
}

