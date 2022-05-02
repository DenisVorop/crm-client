import { $heroku } from "./_index"

export const usersAPI = {
    getAllUsers() {
        return $heroku.get('/users')
    },
    getAllTimeUsers() {
        return $heroku.get('/today-records')
    }
}
