import React from 'react'

import Input from '../../../../../Common/Inputs/Input'
import EyeInput from '../../EyeInput/EyeInput'

import del from '../../../../../../assets/img/del.svg'
import plus from '../../../../../../assets/img/plus.svg'

import './fieldmore.scss'


const FieldMore = ({ label, deleteField, nextVisible, title }) => {

    const [deleteVisible, setDeleteVisible] = React.useState(true)
    const [count, setCount] = React.useState(1)

    const eyes = ['OU', 'OD', 'OS']

    const styleInput = {
        width: '489px',
        height: '34px',
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
                            onChange={() => nextVisible(true)}
                        />
                        : <>
                            {[...Array(count)].map((input, index) => {
                                return (
                                    <div className="row-reception__one-field">
                                        <EyeInput
                                            key={`${input}_${index}`}
                                            setCount={setCount}
                                            eyes={eyes}
                                            count={count}
                                            index={index}
                                            nextVisible={nextVisible}
                                        />
                                        <div className="row-reception__delete" onClick={() => setCount(count - 1)}>
                                            {count === 1
                                                ? null
                                                : <img src={del} alt="Delete" />
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    }
                </div>
                {deleteVisible
                    ? null
                    : null
                }
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
