import {axiosService} from "./axiosService";
import {urls} from "../configs";

const accessToken = 'access'
const refreshToken = 'refresh'

const authService = {
    register: (user) => axiosService.post(urls.users, user),
    login: (user) => axiosService.post(urls.auth.login, user),
    refresh: (refresh) => axiosService.post(urls.auth.refresh, {refresh}),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(accessToken, access)
        localStorage.setItem(refreshToken, refresh)
    },
    deleteToken: () => {
        localStorage.removeItem(accessToken)
        localStorage.removeItem(refreshToken)
    },
    getAccessToken: () => localStorage.getItem(accessToken),

    getRefreshToken: () => localStorage.getItem(refreshToken)
}

export{
    authService
}
