import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAll: (page=1) => axiosService.get(urls.cars, {params: {page}}),
    create: (car) => axiosService.post(urls.cars, car),
    updateById: (id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export{
    carService
}
