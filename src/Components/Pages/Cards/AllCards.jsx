import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import PatientCard from './PatientCard/PatientCard';

import Search from '../../Common/Search/Search';
import Input from '../../Common/Inputs/Input';
import InputAge from '../../Common/Inputs/InputAge';
import InputSex from '../../Common/Inputs/InputSex';
import EmptySearch from '../../Common/EmptySearch/EmptySearch';
import Plan from '../../Common/Plan/Plan';
import Patients from '../../Common/Patients/Patients';
import Preloader from '../../Common/Preloader/Preloader';

import { getCardsData } from '../../../Redux/Reducers/usersReducer';



const AllCards = ({ getPatientId }) => {

    const { serverCardsData, totalCountCards } = useSelector(({ usersReducer }) => usersReducer)
    const dispatch = useDispatch()

    const [loading, setLoading] = React.useState(true)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [limit, setLimit] = React.useState(100)
    const [totalCount, setTotalCount] = React.useState(null)
    const [activeCards, setActiveCards] = React.useState(null);
    const [label, setLabel] = React.useState('');

    React.useEffect(() => {
        if (loading) {
            dispatch(getCardsData(limit, currentPage))
            activeCards && setActiveCards([...activeCards, ...serverCardsData])
        }
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [loading])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) < 100 && activeCards?.length < totalCount) {
            setLoading(true)
        }
    }

    React.useEffect(() => {
        if (serverCardsData.length) {
            if (!activeCards) {
                setActiveCards(serverCardsData)
                setTotalCount(totalCountCards)
            }
            if (activeCards && activeCards?.length < totalCount) {
                setCurrentPage(currentPage + 1)
            }
            setLoading(false)
        }
    }, [serverCardsData, totalCountCards])

    const searchChange = React.useCallback(() => {
        let filteredCards
        switch (label) {
            case 'Поиск по номеру карты': { filteredCards = serverCardsData.filter(user => user.card_num.toLowerCase().includes(cardRef.current.value.toLowerCase())); break; }
            case 'Поиск по ОМС': { filteredCards = serverCardsData.filter(user => user.policy.toLowerCase().includes(policyRef.current.value.toLowerCase())); break; }
            case 'Поиск по телефону': { filteredCards = serverCardsData.filter(user => user.phone.toLowerCase().includes(phoneRef.current.value.toLowerCase())); break; }
            default: { filteredCards = serverCardsData.filter(user => user.name.toLowerCase().includes(nameRef.current.value.toLowerCase())); break; }
        }
        setActiveCards(filteredCards)
    }, [activeCards])

    const nameRef = React.useRef();
    const cardRef = React.useRef();
    const policyRef = React.useRef();
    const phoneRef = React.useRef();

    const searchParams = [
        { label: 'Поиск по номеру карты', placeholder: 'Номер карты', styleInput: { width: '160px' }, ref: cardRef, type: 'number' },
        { label: 'Поиск по ОМС', placeholder: 'Номер полиса ОМС', styleInput: { width: '223px' }, ref: policyRef, type: 'number' },
        { label: 'Поиск по телефону', placeholder: 'Номер телефона', styleInput: { width: '199px' }, ref: phoneRef, type: 'number' },
        { label: 'Поиск по ФИО', placeholder: 'Введите ФИО пациента', styleInput: { width: '380px' }, ref: nameRef, type: 'text' }
    ]

    const onChangeInput = React.useCallback((label) => {
        setLabel(label)
        searchChange()
    }, [label])

    return (
        <>
            <Plan />
            <div className="filter__container">
                <div className="filter__head">
                    {searchParams.map((obj, index) => {
                        return (
                            <Search label={obj.label} key={`${obj}_${index}`} onChangeInput={onChangeInput}>
                                <Input
                                    onChangeInput={onChangeInput}
                                    inputRef={obj.ref}
                                    placeholder={obj.placeholder}
                                    styleInput={obj.styleInput}
                                    label={obj.label}
                                    type={obj.type}
                                />
                            </Search>
                        )
                    })}
                    <Search label='Поиск по возрасту'>
                        <InputAge />
                    </Search>
                    <Search label='Поиск по полу'>
                        <InputSex />
                    </Search>
                </div>
                <div>
                    <Patients
                        stylePatients={{ gridTemplateColumns: '3fr 1.3fr 2fr 2fr 2fr' }}
                    />
                    <div className="records__body">
                        {loading
                            ? <Preloader />
                            : activeCards.length === 0
                                ? <EmptySearch />
                                : activeCards.map((obj, index) => {
                                    return (
                                        <PatientCard
                                            key={`${obj}_${index}`}
                                            {...obj}
                                            getPatientId={getPatientId}
                                        />
                                    )
                                })}
                    </div>
                </div>
                {/* <Pagination /> */}
            </div>
        </>
    )
}

export default AllCards
