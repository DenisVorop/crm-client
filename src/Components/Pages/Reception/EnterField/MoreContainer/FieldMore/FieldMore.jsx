import React from 'react'

import EyeInput from '../../EyeInput/EyeInput'

import del from '../../../../../../assets/img/del.svg'
import plus from '../../../../../../assets/img/plus.svg'

import './fieldmore.scss'

import { eyes } from '../../../../../../Arrays/eyes'


const FieldMore = ({ label, nextVisible, title, setValue, index, value }) => {

    const [deleteVisible, setDeleteVisible] = React.useState(true)
    const [count, setCount] = React.useState(1)
    React.useEffect(() => { count >= 4 && setCount(3) }, [count])

    const styleInput = {
        width: '489px',
        height: '36px',
        padding: '0px 0px 0px 10px',
    }

    const styleInput2 = {
        width: '86px',
        height: '36px',
        padding: '0px 0px 0px 10px',
        margin: '0px 0px 10px 10px',
    }

    const styleInput3 = {
        width: '183px',
        height: '36px',
        margin: '0px 0px 10px 10px',
        padding: '0px 0px 0px 10px',
    }

    React.useEffect(() => {
        switch (label) {
            case 'Аллергологический анамнез': {
                setDeleteVisible(false)
                break
            }
            case 'Придаточный аппарат глаза': {
                setDeleteVisible(false)
                break
            }
            case 'Роговица': {
                setDeleteVisible(false)
                break
            }
        }
    }, [label])

    return (
        <div className="field-more__body">
            <div className="field-more__label">{label}</div>
            <div className="field-more__items">
                <div className="field-more__item">Без особенностей</div>
                <div className="field-more__item">Не отягощен</div>
                <div className="field-more__item">Прозрачная</div>
            </div>
            <div className="field-more__input">
                <div className="field-more__column">
                    {title === 'Анамнез пациента'
                        ? <input
                            type="text"
                            placeholder='Без особенностей'
                            style={styleInput}
                            id={index}
                            onChange={
                                (e) => (
                                    nextVisible(true),
                                    e.target.id === '0'
                                        ? setValue({ first: e.target.value, second: value.second, third: value.third })
                                        : e.target.id === '1' ? setValue({ first: value.first, second: e.target.value, third: value.third })
                                            : setValue({ first: value.first, second: value.second, third: e.target.value })
                                )
                            }
                        />
                        : <>
                            {[...Array(count)].map((input, index) => {
                                return (
                                    <div
                                        className="row-reception__one-field"
                                        key={`${input}_${index}`}
                                    >
                                        <EyeInput
                                            // key={`${input}_${index}`}
                                            setCount={setCount}
                                            eyes={eyes}
                                            count={count}
                                            index={index}
                                            nextVisible={nextVisible}
                                            setValue={setValue}
                                            value={value}
                                        />
                                        {label === 'Основной диагноз'
                                            ? <><div className="row-reception__mkb">
                                                <div className="row-reception__mkb-input">
                                                    <input
                                                        type="text"
                                                        style={styleInput3}
                                                        placeholder='Средней степени'
                                                    />
                                                </div>
                                            </div>
                                                <div className="row-reception__mkb">
                                                    <div className="row-reception__mkb-input">
                                                        <input
                                                            type="text"
                                                            style={styleInput3}
                                                            placeholder='Стационарная'
                                                        />
                                                    </div>
                                                </div></>
                                            : null
                                        }
                                        {title === 'Status ophtalmicus'
                                            ? null
                                            : <div className="row-reception__mkb">
                                                <div className="row-reception__mkb-input">
                                                    <input
                                                        type="text"
                                                        style={styleInput2}
                                                        readOnly="readonly"
                                                        placeholder='Т.85.2'
                                                    />
                                                </div>
                                                <div className="row-reception__mkb-label">
                                                    МКБ-10
                                                </div>
                                            </div>
                                        }
                                        <div
                                            className="row-reception__delete"
                                            onClick={
                                                () => (
                                                    setCount(count - 1)
                                                )
                                            }
                                        >
                                            {[...Array(count)].length === index + 1 && count !== 1
                                                ? <img src={del} alt="Delete" />
                                                : null
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    }
                </div>
            </div>
            {title === 'Анамнез пациента'
                ? null
                : <div className="row-reception__add-more" onClick={() => setCount(count + 1)}>
                    <img src={plus} alt="plus" />
                    <p>добавить новое поле</p>
                </div>
            }
        </div>
    )
}

export default FieldMore
