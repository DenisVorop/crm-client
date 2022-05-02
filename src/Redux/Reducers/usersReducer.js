import { usersAPI } from "../../API/usersApi";

const GET_USERS = 'GET_USERS';
const GET_TIMES = 'GET_TIMES';
const ADD_REC = 'ADD_REC';
const GET_CARDS = 'GET_CARDS';

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_LIMIT = 'SET_LIMIT';



const initialState = {
    usersData: [],
    timesData: [],
    serverCardsData: [],
    currentPage: 1,
    totalCount: 0,
    limit: 10,
}



const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                usersData: action.payload
            }
        }
        case GET_TIMES: {
            return {
                ...state,
                timesData: action.payload,
            }
        }
        case ADD_REC: {
            const NewRecord = {
                id: action.payload.id,
                time_id: Number(action.payload.time),
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
                card_info: [],
                last_records: []
            };
            return {
                ...state,
                usersData: [...state.usersData, NewRecord],
            };
        }
        case GET_CARDS: {
            return {
                ...state,
                serverCardsData: action.payload,
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload,
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.payload,
            }
        }
        case SET_LIMIT: {
            return {
                ...state,
                limit: action.payload,
            }
        }
        default: {
            return state;
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

export const getPage = (payload) => {
    return ({
        type: SET_CURRENT_PAGE,
        payload,
    })
}

export const getTotalCount = (payload) => {
    return ({
        type: SET_TOTAL_COUNT,
        payload,
    })
}



export const getoldUsersData = () => {
    return async (dispatch) => {
        const response = await usersAPI.getAllUsers()
        if (response.status === 200) {
            dispatch(getUsers(response.data));
            console.log(response);
        }
    }
}

export const getTimesData = () => {
    return async (dispatch) => {
        const response = await usersAPI.getAllTimeUsers()
        if (response.status === 200) {
            dispatch(getTimes(response.data));
            console.log(response);
        }
    }
}



export default usersReducer;
