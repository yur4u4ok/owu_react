import {axiosService} from "./axiosService";

const todosService = {
    getAll: () => axiosService.get('/todos')
}

export{
    todosService
}
