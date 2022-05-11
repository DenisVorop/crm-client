import { $local } from "./_index"

export const usersAPI = {
    getAllUsers() {
        return $local.get('/patients?_sort=time_index&order=asc')
    },
    getTimes() {
        return $local.get('/times')
    },
    getCards(limit, currentPage) {
        return $local.get(`/cards?_limit=${limit}&_page=${currentPage}&_sort=name&_order=asc`)
    }
}
