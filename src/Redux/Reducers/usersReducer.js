import { usersAPI } from '../../API/usersApi'

const GET_USERS = 'GET_USERS'
const GET_TIMES = 'GET_TIMES'
const ADD_REC = 'ADD_REC'
const GET_CARDS = 'GET_CARDS'

// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
// const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
// const SET_LIMIT = 'SET_LIMIT';

const PUSH_RECEPTION = 'PUSH_RECEPTION'

const GET_TOTAL_COUNT_CARDS = 'GET_TOTAL_COUNT_CARDS'



const initialState = {
    usersData: [],
    timesData: [],
    serverCardsData: [],
    currentPage: 1,
    totalCountCards: 0,
    limit: 10,
}



const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                usersData: action.payload,
            }
        }
        case GET_TIMES: {
            return {
                ...state,
                timesData: action.payload,
            }
        }
        case ADD_REC: {

            const cardNumPayload = action.payload.card_num // Сокращенная запись номера карты из payload
            const updatedUsersData = [...state.usersData] // Копируем пациентов

            // Находим индекс пациента, которого записываем на прием
            const selectedPatientIndex = updatedUsersData
                .findIndex(patient => patient.card_num === cardNumPayload)

            // Записи приема выбранного пациента
            // updatedUsersData[selectedPatientIndex].last_records

            // Записи приема выбранного пациента
            // updatedUsersData[selectedPatientIndex].card_info

            const newRecord = {
                id: state.usersData.length + 1,
                time_index: Number(action.payload.time),
                name: action.payload.pat_name,
                policy: action.payload.policy,
                sex: action.payload.sex,
                age: action.payload.age,
                card_num: action.payload.card_num,
                time: action.payload.time,
                status: 'Повторный прием',
                last_name: action.payload.last_name,
                first_name: action.payload.first_name,
                patronymic: action.payload.patronymic,
                birth: action.payload.birth,
                marital_status: action.payload.marital_status,
                reg_addres: action.payload.reg_addres,
                fact_addres: action.payload.fact_addres,
                phone: action.payload.phone,
                first_record: action.payload.first_record,
                last_record: action.payload.last_record,
                card_info: updatedUsersData[selectedPatientIndex].card_info,
                last_records: updatedUsersData[selectedPatientIndex].last_records,
            }

            addNewReceptionToPatient('', newRecord, 'patients', 'POST')

            return {
                ...state,
                // usersData: [...state.usersData, newRecord],
            }
        }
        case GET_CARDS: {
            return {
                ...state,
                serverCardsData: action.payload,
            }
        }
        case GET_TOTAL_COUNT_CARDS: {
            return {
                ...state,
                totalCountCards: Number(action.payload),
            }
        }
        // case SET_CURRENT_PAGE: {
        //     return {
        //         ...state,
        //         currentPage: action.payload,
        //     }
        // }
        // case SET_TOTAL_COUNT: {
        //     return {
        //         ...state,
        //         totalCount: action.payload,
        //     }
        // }
        // case SET_LIMIT: {
        //     return {
        //         ...state,
        //         limit: action.payload,
        //     }
        // }
        case PUSH_RECEPTION: {

            const cardNumPayload = action.payload.info.card_num // Сокращенная запись номера карты из payload
            const updatedUsersData = [...state.usersData] // Копируем пациентов
            const patientId = action.payload.info.patientId // Сокращенная запись айдишника из payload

            // Находим индекс пациента, которому добавляем запись приема
            const selectedPatientIndex = updatedUsersData
                .findIndex(patient => patient.card_num === cardNumPayload)

            // Добавляем выбранному пациенту запись приема
            updatedUsersData[selectedPatientIndex].last_records = updatedUsersData[selectedPatientIndex].last_records
                .concat([action.payload])

            // Меняем выбранному пациенту статус приема на 'Прием завершен'
            updatedUsersData[selectedPatientIndex].status = 'Прием завершен'
            updatedUsersData[selectedPatientIndex].time_index = action.payload.info.time_index

            // Отправляем на сервер
            addNewReceptionToPatient(patientId, updatedUsersData[selectedPatientIndex], 'patients', 'PUT')
            addNewReceptionToPatient(patientId, updatedUsersData[selectedPatientIndex], 'cards', 'PUT')
        }
        default: {
            return state
        }
    }
}



export const getUsers = (payload) => {
    return {
        type: GET_USERS,
        payload,
    }
}

export const getTimes = (payload) => {
    return {
        type: GET_TIMES,
        payload,
    }
}

export const addNewRecord = (payload) => {
    return ({
        type: ADD_REC,
        payload,
    })
}

export const getAllCards = (payload) => {
    return ({
        type: GET_CARDS,
        payload,
    })
}

// export const getPage = (payload) => {
//     return ({
//         type: SET_CURRENT_PAGE,
//         payload,
//     })
// }

export const getTotalCountCards = (payload) => {
    return ({
        type: GET_TOTAL_COUNT_CARDS,
        payload,
    })
}

export const savePatientRecord = (payload) => {
    return {
        type: PUSH_RECEPTION,
        payload,
    }
}



export const getTodayRecords = () => {
    return async (dispatch) => {
        const response = await usersAPI.getAllUsers()
        if (response.status === 200) {
            dispatch(getUsers(response.data))
        }
    }
}

export const getTimesData = () => {
    return async (dispatch) => {
        const response = await usersAPI.getTimes()
        if (response.status === 200) {
            dispatch(getTimes(response.data))
        }
    }
}

export const getCardsData = (limit, currentPage) => {
    return async (dispatch) => {
        const response = await usersAPI.getCards(limit, currentPage)
        if (response.status === 200) {
            dispatch(getAllCards(response.data))
            dispatch(getTotalCountCards(response.headers['x-total-count']))
        }
    }
}

async function addNewReceptionToPatient(patientId, patient, url, method) {
    const response = await fetch(`http://localhost:8000/${url}/${patientId}`, {
        method: method,
        body: JSON.stringify(
            patient
        ),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return await response.json()
}


export default usersReducer
