import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './newrecord.scss'

import arrowB from '../../../assets/img/arrows/arrow-b.svg'
import arrowT from '../../../assets/img/arrows/arrow-t.svg'

import { addNewRecord } from '../../../Redux/Reducers/usersReducer'

import Plan from '../../Common/Plan/Plan'
import Button from '../../Common/Button/Button'

const NewRecord = () => {

    const { timesData, serverCardsData } = useSelector(({ usersReducer }) => usersReducer)
    const arrUsers = JSON.parse(JSON.stringify(serverCardsData))
    arrUsers.sort((a, b) => a.name > b.name ? 1 : -1)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [activeUsers, setActiveUsers] = React.useState(arrUsers)
    const [visibleNames, setVisibleNames] = React.useState(false)
    const [visibleCards, setVisibleCards] = React.useState(false)
    const [infoPatient, setInfoPatient] = React.useState(null)
    const [enteredName, setEnteredName] = React.useState('')
    const [enteredCard, setEnteredCard] = React.useState('')
    const [changeArrow, setChangeArrow] = React.useState(false)

    const searchNamesRef = React.useRef()
    const searchCardsRef = React.useRef()

    const onSearchChangeNames = React.useCallback(() => {
        setVisibleNames(true)
        setChangeArrow(true)
        setEnteredName(searchNamesRef.current.value)
        const filteredUsers = arrUsers.filter(user => user.name.toLowerCase().includes(searchNamesRef.current.value.toLowerCase()))
        setActiveUsers(filteredUsers)
    }, [arrUsers])

    const onSearchChangeCards = React.useCallback(() => {
        setVisibleCards(true)
        setEnteredCard(searchCardsRef.current.value)
        const filteredUsers = arrUsers.filter(user => user.card_num.toLowerCase().includes(searchCardsRef.current.value.toLowerCase()))
        setActiveUsers(filteredUsers)
    }, [arrUsers])

    const autoCompleteInfo = React.useCallback((pat) => {
        setInfoPatient(pat)
    }, [])

    const validationNewRecord = yup.object().shape({
        pat_name: yup.string().typeError('string expected!').required('???????????????? ???????????????? ???? ????????????'),
        card_num: yup.string().typeError('string expected!').required('???????????????? ???????????????? ???? ????????????'),
    })

    const cancelVisibleCardInfo = () => {
        setVisibleNames(false)
        setVisibleCards(false)
        setChangeArrow(false)
    }

    const selectCard = (pat) => {
        setVisibleNames(false)
        setVisibleCards(false)
        autoCompleteInfo(pat)
        setChangeArrow(false)
    }

    return (
        <>
            <Formik
                initialValues={{
                    name_clinic: '',
                    name_doctor: '',
                    separation: '', // ??????????????????
                    pat_name: '',
                    card_num: '',
                    type: '?????????????? ??????????',
                    time: '',
                }}
                validationSchema={!infoPatient && validationNewRecord}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={(values) => {
                    const obj = {
                        time: values.time,
                        pat_name: infoPatient.name,
                        card_num: infoPatient.card_num,
                        type: values.type,
                        name_clinic: '',
                        name_doctor: '',
                        separation: '',
                        policy: infoPatient.policy,
                        age: infoPatient.age,
                        birth: infoPatient.birth,
                        email: infoPatient.email,
                        fact_addres: infoPatient.fact_addres,
                        first_name: infoPatient.first_name,
                        first_record: infoPatient.first_record,
                        last_name: infoPatient.last_name,
                        last_record: infoPatient.last_record,
                        marital_status: infoPatient.marital_status,
                        patronymic: infoPatient.patronymic,
                        phone: infoPatient.phone,
                        reg_addres: infoPatient.reg_addres,
                        sex: infoPatient.sex,
                        id: infoPatient.id,
                    }
                    dispatch(addNewRecord(obj))
                    navigate('/receptions')
                }}
            >
                {({ handleChange, handleBlur, isValid, handleSubmit, dirty, touched, errors }) => (
                    <>
                        <Plan label='???????????????? ?????????? ????????????' />
                        <Form>
                            <div className='new-rec' onClick={cancelVisibleCardInfo}>
                                <div className='new-rec__container'>
                                    <div className='new-rec__body'>
                                        <div className='new-rec__items'>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>????????</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <input
                                                            type='text'
                                                            placeholder='???????????????? ??????????'
                                                            name='name_doctor'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                    </div>
                                                    <div className='new-rec__img'>
                                                        <img src={arrowB} alt='arrow-b' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>??????????????????</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <input
                                                            type='text'
                                                            placeholder='???????????????? ??????????????????'
                                                            name='separation'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                    </div>
                                                    <div className='new-rec__img'>
                                                        <img src={arrowB} alt='arrow-b' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>?????? ????????????????</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <input
                                                            className={!infoPatient && touched.pat_name && errors.pat_name ? 'valid-input-error' : ''}
                                                            type='text'
                                                            placeholder='???????????????? ????????????????'
                                                            name='pat_name'
                                                            autoComplete='off'
                                                            onChange={(handleChange, onSearchChangeNames)}
                                                            onBlur={handleBlur}
                                                            ref={searchNamesRef}
                                                            value={infoPatient ? infoPatient.name : enteredName}
                                                            onClick={() => setInfoPatient(null)}
                                                        />
                                                        {!infoPatient && touched.pat_name && errors.pat_name && <p className='valid-text-error'>{errors.pat_name}</p>}
                                                        {visibleNames
                                                            ? <div className={visibleNames ? 'find active' : 'find'} >
                                                                <div className='find__field' onClick={e => e.stopPropagation()} >
                                                                    {activeUsers.map((pat, index) => {
                                                                        return (
                                                                            <div
                                                                                value={pat.name}
                                                                                key={`${pat}_${index}`}
                                                                                style={{ cursor: 'pointer' }}
                                                                                onClick={() => selectCard(pat)}
                                                                                className='visible-field'
                                                                            >
                                                                                {pat.name} --- {pat.card_num}
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                            : null
                                                        }
                                                    </div>
                                                    <div className='new-rec__img'>
                                                        <img src={!changeArrow ? arrowB : arrowT} alt='arrow-b' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>?????????? ??????????</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <input
                                                            className={!infoPatient && touched.card_num && errors.card_num ? 'valid-input-error' : ''}
                                                            type='number'
                                                            placeholder='?????????????? ?????????? ??????????'
                                                            name='card_num'
                                                            autoComplete='off'
                                                            onChange={(handleChange, onSearchChangeCards)}
                                                            onBlur={handleBlur}
                                                            ref={searchCardsRef}
                                                            value={infoPatient ? infoPatient.card_num : enteredCard}
                                                            onClick={() => setInfoPatient(null)}
                                                        />
                                                        {!infoPatient && touched.card_num && errors.card_num && <p className='valid-text-error'>{errors.card_num}</p>}
                                                        {visibleCards
                                                            ? <div className={visibleCards ? 'find active' : 'find'} >
                                                                <div className='find__field' onClick={e => e.stopPropagation()} >
                                                                    {activeUsers.map((pat, index) => {
                                                                        return (
                                                                            <div
                                                                                value={pat.card_num}
                                                                                key={`${pat}_${index}`}
                                                                                style={{ cursor: 'pointer', display: 'block', fontWeight: '400' }}
                                                                                onClick={() => selectCard(pat)}
                                                                                className='visible-field'
                                                                            >
                                                                                {pat.card_num} --- {pat.name}
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                            : null
                                                        }
                                                    </div>
                                                    <div className='new-rec__img'>
                                                        <img src={arrowB} alt='arrow-b' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>??????????</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <select
                                                            className='time-select'
                                                            name='time'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            {timesData.map((time, index) => {
                                                                return (
                                                                    <option
                                                                        name='time'
                                                                        value={time.time_index}
                                                                        key={`${time}_${index}`}
                                                                    >
                                                                        {time.time}
                                                                    </option>
                                                                )
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className='new-rec__img'>
                                                        <img src={arrowB} alt='arrow-b' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>?????? ????????????</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <input
                                                            type='text'
                                                            placeholder='???????????????? ?????? ????????????'
                                                            name='type'
                                                            value='?????????????? ??????????'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                    </div>
                                                    <div className='new-rec__img'>
                                                        <img src={arrowB} alt='arrow-b' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__btn' onClick={handleSubmit} disabled={!isValid && !dirty}>
                                                <Button label='?????????????? ?????????? ????????????' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </>
    )
}

export default NewRecord
