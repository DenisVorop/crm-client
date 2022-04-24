import { usersAPI } from "../../API/loginApi";

const GET_USERS = 'GET_USERS';
const GET_TIMES = 'GET_TIMES';
const ADD_REC = 'ADD_REC';
const GET_CARDS = 'GET_CARDS';

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_LIMIT = 'SET_LIMIT';



const initialState = {
    oldUsersData: [],
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
                oldUsersData: action.payload,
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
            const NewRecordord = {
                id: 16,
                time_id: Number(action.payload.time),
                name: action.payload.pat_name,
                policy: action.payload.policy,
                sex: 'M',
                age: '20',
                card_num: action.payload.card_num,
                time: action.payload.time,
                status: 'Повторный прием',
                last_name: 'Денис',
                first_name: 'Воропаев',
                patronymic: 'Юрьевич',
                birth: '12.12.1212',
                marital_status: 'Не женат',
                reg_addres: 'Адрес регистрации',
                fact_addres: 'Адрес проживания',
                phone: '88005553535',
                first_record: '23.23.2323',
                last_record: '25.25.2525',
                card_info: [
                    {
                        system: "Общий осмотр",
                        label_sub: "Субъективно",
                        label_ob: "Объективно",
                        symptoms_sub: { 1: "" },
                        symptoms_ob: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "" }
                    },
                    {
                        system: "Система органов дыхания",
                        label_sub: "Субъективно",
                        label_ob: "Объективно",
                        symptoms_sub: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: "", 11: "", 12: "", 13: "", 14: "" },
                        symptoms_ob: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" }
                    },
                    {
                        system: "Сердечно-сосудистая система",
                        label_sub: "Субъективно",
                        label_ob: "Объективно",
                        symptoms_sub: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "" },
                        symptoms_ob: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" }
                    },
                    {
                        system: "Система органов пищеварения",
                        label_sub: "Субъективно",
                        label_ob: "Объективно",
                        symptoms_sub: { 1: "", 2: "", 3: "", 4: "", 5: "" },
                        symptoms_ob: { 1: "", 2: "", 3: "", 4: "" }
                    },
                    {
                        system: "Мочеполовая система",
                        label_sub: "Субъективно",
                        label_ob: "Объективно",
                        symptoms_sub: { 1: "", 2: "", 3: "", 4: "" },
                        symptoms_ob: { 1: "" }
                    },
                    {
                        system: "Нервная система и органы чувств",
                        label_sub: "Субъективно",
                        label_ob: "Объективно",
                        symptoms_sub: { 1: "", 2: "", 3: "" },
                        symptoms_ob: {}
                    }
                ],
                last_records: [
                    {
                        position: "Медицинская сестра (медбрат) участковая",
                        name_doctor: "Иванова Г.Ю.",
                        name_clinic: "Филиал №1",
                        date_last_record: "14.02.2021"
                    },
                    {
                        position: "Офтальмолог",
                        name_doctor: "Рыжкова Г.Ю.",
                        name_clinic: "Филиал №2",
                        date_last_record: "22.12.2020"
                    },
                    {
                        position: "Хирург",
                        name_doctor: "Петров Г.Ю.",
                        name_clinic: "Филиал №1",
                        date_last_record: "07.02.2022"
                    }
                ]
            };
            return {
                ...state,
                usersData: [...state.usersData, NewRecordord],
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
