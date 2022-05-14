import React from 'react'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import { Form, Formik } from 'formik'
// import * as yup from 'yup'

import Plan from '../../Common/Plan/Plan'
import Button from '../../Common/Button/Button'

// import { createCard } from '../../../API/cardsApi'


const NewPatient = () => {

    const addPatient = (values) => {
        let card_num;
        (function getRandomCardNum(min, max) {
            card_num = String(Math.floor(Math.random() * (max - min + 1)) + min)
            return card_num
        })(111111, 999999)
        values.age = Number(values.age)
        values.card_num = card_num
        values.name = values.last_name + ' ' + values.first_name + ' ' + values.patronymic
        values.email = String(values.last_name + '@' + values.first_name + '.ru')
        // createCard(values).then(data => {

        // })
    }

    const navigate = useNavigate()

    const phoneRegExp = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/ //eslint-disable-line

    // const validationNewPatient = yup.object().shape({
    //     name: yup.string().typeError('string expected!').required('Введите корректные данные'),
    //     surname: yup.string().typeError('string expected!').required('Введите корректные данные'),
    //     patronymic: yup.string().typeError('string expected!').required('Введите корректные данные'),
    //     fam_status: yup.string().typeError('string expected!').required('Введите корректные данные'),
    //     birth: yup.string().typeError('string expected!').required('Введите корректные данные'),
    //     reg_addres: yup.string().typeError('string expected!').required('Введите корректные данные'),
    //     fact_addres: yup.string().typeError('string expected!').required('Введите корректные данные'),
    //     phone: yup.string().required('Введите корректные данные').matches(phoneRegExp, 'Номер телефона введен не верно'),
    // })

    return (
        <>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    patronymic: '', // отчество
                    name: '',
                    sex: '',
                    age: '',
                    marital_status: '',
                    birth: '',
                    reg_addres: '',
                    fact_addres: '',
                    phone: '',
                    card_num: '',
                    last_records: [],
                    cardInfo: [],
                    policy: '',
                    email: '',
                    first_record: '',
                    last_record: '',
                }}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={(values) => {
                    addPatient(values)
                    navigate('/receptions')
                }}
            // validationSchema={validationNewPatient}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <>
                        <Plan label='Создание новой карты пациента' />
                        <Form>
                            <div className='new-rec'>
                                <div className='new-rec__container' >
                                    <div className='new-rec__body' style={{ width: 'auto' }}>
                                        <div className='new-rec__items' style={{ width: 'auto' }}>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>Имя:</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <input
                                                            className={touched.first_name && errors.first_name ? 'valid-input-error' : ''}
                                                            type='text'
                                                            placeholder='Имя пациента'
                                                            name='first_name'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.first_name && errors.first_name && <p className='valid-text-error'>{errors.first_name}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>Фамилия:</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <input
                                                            className={touched.last_name && errors.last_name ? 'valid-input-error' : ''}
                                                            type='text'
                                                            placeholder='Фамилия пациента'
                                                            name='last_name'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.last_name && errors.last_name && <p className='valid-text-error'>{errors.last_name}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>Отчество:</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <input
                                                            className={touched.patronymic && errors.patronymic ? 'valid-input-error' : ''}
                                                            type='text'
                                                            placeholder='Отчество пациента (при наличии)'
                                                            name='patronymic'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.patronymic && errors.patronymic && <p className='valid-text-error'>{errors.patronymic}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>Пол:</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input' style={{ display: 'flex', width: '366px' }}>
                                                        <div className='new-rec__s' style={{ marginRight: '17px' }}>
                                                            <input
                                                                className={touched.sex && errors.sex ? 'valid-input-error' : ''}
                                                                type='radio'
                                                                style={{ width: '17px' }}
                                                                id='choice-m'
                                                                name='sex'
                                                                value='М'
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                            <label className='new-rec__sex' htmlFor='choice-m'>М</label>
                                                        </div>
                                                        <div className='new-rec__s'>
                                                            <input
                                                                className={touched.sex && errors.sex ? 'valid-input-error' : ''}
                                                                type='radio'
                                                                style={{ width: '17px' }}
                                                                id='choice-f'
                                                                name='sex'
                                                                value='Ж'
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                            <label className='new-rec__sex' htmlFor='choice-f'>Ж</label>
                                                        </div>
                                                    </div>
                                                    {touched.sex && errors.sex && <p className='valid-text-error'>{errors.sex}</p>}
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>Возраст:</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <InputMask
                                                            className={touched.age && errors.age ? 'valid-input-error' : ''}
                                                            type='text'
                                                            placeholder='Возраст'
                                                            name='age'
                                                            mask='99'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.age && errors.age && <p className='valid-text-error'>{errors.age}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>Семейное положение:</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <input
                                                            className={touched.marital_status && errors.marital_status ? 'valid-input-error' : ''}
                                                            type='text'
                                                            placeholder='Семейное положение'
                                                            name='marital_status'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.marital_status && errors.marital_status && <p className='valid-text-error'>{errors.marital_status}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>День рождения:</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <InputMask
                                                            className={touched.birth && errors.birth ? 'valid-input-error' : ''}
                                                            type='text'
                                                            placeholder='Дата рождения'
                                                            name='birth'
                                                            mask='99.99.9999'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.birth && errors.birth && <p className='valid-text-error'>{errors.birth}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>Адрес прописки:</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <input
                                                            className={touched.reg_addres && errors.reg_addres ? 'valid-input-error' : ''}
                                                            type='text'
                                                            placeholder='Адрес прописки'
                                                            name='reg_addres'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.reg_addres && errors.reg_addres && <p className='valid-text-error'>{errors.reg_addres}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>Адрес проживания:</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <input
                                                            className={touched.fact_addres && errors.fact_addres ? 'valid-input-error' : ''}
                                                            type='text'
                                                            placeholder='Адрес проживания'
                                                            name='fact_addres'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.fact_addres && errors.fact_addres && <p className='valid-text-error'>{errors.fact_addres}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>Телефон:</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <InputMask
                                                            className={touched.phone && errors.phone ? 'valid-input-error' : ''}
                                                            type='tel'
                                                            placeholder='Номер телефона'
                                                            name='phone'
                                                            mask='8(999)999-99-99'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.phone && errors.phone && <p className='valid-text-error'>{errors.phone}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>Дата первого посещения:</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <InputMask
                                                            className={touched.first_record && errors.first_record ? 'valid-input-error' : ''}
                                                            type='text'
                                                            placeholder='12.04.2021'
                                                            name='first_record'
                                                            mask='99.99.9999'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.first_record && errors.first_record && <p className='valid-text-error'>{errors.first_record}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>Дата последнего посещения:</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <InputMask
                                                            className={touched.last_record && errors.last_record ? 'valid-input-error' : ''}
                                                            type='text'
                                                            placeholder='23.05.2021'
                                                            name='last_record'
                                                            mask='99.99.9999'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.last_record && errors.last_record && <p className='valid-text-error'>{errors.last_record}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-rec__item'>
                                                <div className='new-rec__label'>Полис:</div>
                                                <div className='new-rec__vvod'>
                                                    <div className='new-rec__input'>
                                                        <InputMask
                                                            className={touched.policy && errors.policy ? 'valid-input-error' : ''}
                                                            type='text'
                                                            placeholder='1234 12345678'
                                                            name='policy'
                                                            mask='9999 99999999'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.policy && errors.policy && <p className='valid-text-error'>{errors.policy}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='new-rec__btn' disabled={!isValid && !dirty} onClick={handleSubmit} >
                                            <Button label='Создать карту пациента' />
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

export default NewPatient
