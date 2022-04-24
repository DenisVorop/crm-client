import React from 'react'

import plus from '../../../../assets/img/plus.svg'
import del from '../../../../assets/img/del.svg'

import EyeInput from './EyeInput/EyeInput'
import MoreContainer from './MoreContainer/MoreContainer'


const EnterField = ({ field, visible, setVisible, nextVisible }) => {
    const eyes = ['OU', 'OD', 'OS']
    const [count, setCount] = React.useState(1)

    const [allergyVisible, setAlergyVisible] = React.useState(true) // 1
    const [pharmacologyVisible, setPharmacologyVisible] = React.useState(false) // 2
    const [operationsVisible, setOperationsVisible] = React.useState(false) // 3

    const [adnexaVisible, setAdnexaVisible] = React.useState(true) // 1
    const [corneaVisible, setCorneaVisible] = React.useState(true) // 2
    const [frontVisible, setFrontVisible] = React.useState(false) // 3
    const [irisVisible, setIrisVisible] = React.useState(false) // 4
    const [lensVisible, setLensVisible] = React.useState(false) // 5
    const [vitreousVisible, setVitreousVisible] = React.useState(false) // 6
    const [dznVisible, setDznVisible] = React.useState(false) // 7
    const [posteriorVisible, setPosteriorVisible] = React.useState(false) // 8

    return (
        visible &&
        <div className="reception__row row-reception">
            <div className="row-reception__label">{field.label}</div>
            <div className="row-reception__text">{field.text}</div>
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
            <div className="row-reception__add">
                <div className="row-reception__add-more" onClick={() => setCount(count + 1)}>
                    <img src={plus} alt="plus" />
                    <p>добавить новое поле</p>
                </div>
                <div className="field-more__rows">
                    {Object.keys(field).length !== 2
                        ? <>
                            {field.addMore.map((label, index) => {
                                let visible
                                let setVisible = function () { }
                                let nextVisible = function () { }
                                switch (label.label) {
                                    case 'Аллергологический анамнез': {
                                        visible = allergyVisible
                                        // setVisible = setAlergyVisible
                                        nextVisible = setPharmacologyVisible
                                        break
                                    }
                                    case 'Фармакологический анамнез': {
                                        visible = pharmacologyVisible
                                        setVisible = setPharmacologyVisible
                                        nextVisible = setOperationsVisible
                                        break
                                    }
                                    case 'Операции на глаза': {
                                        visible = operationsVisible
                                        setVisible = setOperationsVisible
                                        break
                                    }
                                    case 'Придаточный аппарат глаза': {
                                        visible = adnexaVisible
                                        // setVisible = setAdnexaVisible
                                        // nextVisible = setPharmacologyVisible
                                        break
                                    }
                                    case 'Роговица': {
                                        visible = corneaVisible
                                        // setVisible = setCorneaVisible
                                        nextVisible = setFrontVisible
                                        break
                                    }
                                    case 'Передняя камера': {
                                        visible = frontVisible
                                        setVisible = setFrontVisible
                                        nextVisible = setIrisVisible
                                        break
                                    }
                                    case 'Радужка': {
                                        visible = irisVisible
                                        setVisible = setIrisVisible
                                        nextVisible = setLensVisible
                                        break
                                    }
                                    case 'Хрусталик': {
                                        visible = lensVisible
                                        setVisible = setLensVisible
                                        nextVisible = setVitreousVisible
                                        break
                                    }
                                    case 'Стекловидное тело': {
                                        visible = vitreousVisible
                                        setVisible = setVitreousVisible
                                        nextVisible = setDznVisible
                                        break
                                    }
                                    case 'ДЗН': {
                                        visible = dznVisible
                                        setVisible = setDznVisible
                                        nextVisible = setPosteriorVisible
                                        break
                                    }
                                    case 'Задний отрезок глаза ': {
                                        visible = posteriorVisible
                                        setVisible = setPosteriorVisible
                                        // nextVisible = setOperationsVisible
                                        break
                                    }
                                }
                                return (
                                    <MoreContainer
                                        key={`${label}_${index}`}
                                        visible={visible}
                                        setVisible={setVisible}
                                        nextVisible={nextVisible}
                                        label={label}
                                        title={field.label}
                                    />
                                )
                            })}
                        </>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default EnterField
