import React from 'react'

import plus from '../../../../assets/img/plus.svg'
import del from '../../../../assets/img/del.svg'

import EyeInput from './EyeInput/EyeInput'
import MoreContainer from './MoreContainer/MoreContainer'

import { eyes } from '../../../../Arrays/eyes'


const EnterField = ({ field, visible, setVisible, nextVisible, setValue, value, getHistoryData, getStatusData, getDiagnosisData }) => {

    const [count, setCount] = React.useState(1)
    React.useEffect(() => { count >= 4 && setCount(3) }, [count])

    // Видимость тем и полей ввода
    const [allergyVisible, setAlergyVisible] = React.useState(true) // 1
    const [allergy, setAlergy] = React.useState({ first: '', second: '', third: '' }) // 1  allergy
    const [pharmacologyVisible, setPharmacologyVisible] = React.useState(false) // 2
    const [pharmacology, setPharmacology] = React.useState({ first: '', second: '', third: '' }) // 2  pharmacology
    const [operationsVisible, setOperationsVisible] = React.useState(false) // 3
    const [operations, setOperations] = React.useState({ first: '', second: '', third: '' }) // 3  operations
    // ---

    // Видимость полей ввода у тем
    const [adnexaVisible, setAdnexaVisible] = React.useState(true) // 1
    const [adnexa, setAdnexa] = React.useState({ first: '', second: '', third: '' }) // 1  adnexa
    const [corneaVisible, setCorneaVisible] = React.useState(false) // 2
    const [cornea, setCornea] = React.useState({ first: '', second: '', third: '' }) // 2  cornea
    const [frontVisible, setFrontVisible] = React.useState(false) // 3
    const [front, setFront] = React.useState({ first: '', second: '', third: '' }) // 3  front
    const [irisVisible, setIrisVisible] = React.useState(false) // 4
    const [iris, setIris] = React.useState({ first: '', second: '', third: '' }) // 4  iris
    const [lensVisible, setLensVisible] = React.useState(false) // 5
    const [lens, setLens] = React.useState({ first: '', second: '', third: '' }) // 5  lens
    const [vitreousVisible, setVitreousVisible] = React.useState(false) // 6
    const [vitreous, setVitreous] = React.useState({ first: '', second: '', third: '' }) // 6  vitreous
    const [dznVisible, setDznVisible] = React.useState(false) // 7
    const [dzn, setDzn] = React.useState({ first: '', second: '', third: '' }) // 7  dzn
    const [posteriorVisible, setPosteriorVisible] = React.useState(false) // 8
    const [posterior, setPosterior] = React.useState({ first: '', second: '', third: '' }) // 8  posterior
    // ---

    // Видимость тем и полей ввода
    const [mainDiagnosisVisible, setMainDiagnosisVisible] = React.useState(true) // 1
    const [mainDiagnosis, setMainDiagnosis] = React.useState({ first: '', second: '', third: '' }) // 1  mainDiagnosis
    const [concomitantProfileDiagnosisVisible, setConcomitantProfileDiagnosisVisible] = React.useState(false) // 2
    const [concomitantProfileDiagnosis, setConcomitantProfileDiagnosis] = React.useState({ first: '', second: '', third: '' }) // 2  concomitantProfileDiagnosis
    const [associatedMedicalDiagnosisVisible, setAssociatedMedicalDiagnosisVisible] = React.useState(false) // 3
    const [associatedMedicalDiagnosis, setAssociatedMedicalDiagnosis] = React.useState({ first: '', second: '', third: '' }) // 3  associatedMedicalDiagnosis
    // ---

    // Видимость тем и полей ввода
    const [visometryIOPVisible, setVisometryIOPVisible] = React.useState(true) // 1
    const [visometryIOP, setVisometryIOP] = React.useState({ first: '', second: '', third: '' }) // 1  visometryIOP
    const [visometryInCycloplegiaVisible, setVisometryInCycloplegiaVisible] = React.useState(false) // 2
    const [visometryInCycloplegia, setVisometryInCycloplegia] = React.useState({ first: '', second: '', third: '' }) // 2  visometryInCycloplegia
    const [pachymetricMapVisible, setPachymetricMapVisible] = React.useState(false) // 3
    const [pachymetricMap, setPachymetricMap] = React.useState({ first: '', second: '', third: '' }) // 3  pachymetricMap
    const [autorefractometryVisible, setAutorefractometryVisible] = React.useState(false) // 3
    const [autorefractometry, setAutorefractometry] = React.useState({ first: '', second: '', third: '' }) // 3  autorefractometry
    // ---

    React.useEffect(() => {
        const histData = [allergy, pharmacology, operations]
        getHistoryData(histData)
    }, [allergy, pharmacology, operations])

    React.useEffect(() => {
        const statData = [adnexa, cornea, front, iris, lens, vitreous, dzn, posterior]
        getStatusData(statData)
    }, [adnexa, cornea, front, iris, lens, vitreous, dzn, posterior])

    React.useEffect(() => {
        const diagData = [mainDiagnosis, concomitantProfileDiagnosis, associatedMedicalDiagnosis]
        getDiagnosisData(diagData)
    }, [mainDiagnosis, concomitantProfileDiagnosis, associatedMedicalDiagnosis])

    return (
        visible &&
        <div className="reception__row row-reception">
            <div className="row-reception__label">{field.label}</div>
            <div className="row-reception__text">{field.text}</div>
            {field.label !== 'Данные обследований'
                ? [...Array(count)].map((input, index) => {
                    return (
                        <div
                            className="row-reception__one-field"
                            key={`${input}_${index}`}>
                            <EyeInput
                                setCount={setCount}
                                eyes={eyes}
                                count={count}
                                nextVisible={nextVisible}
                                setValue={setValue}
                                index={index}
                                value={value}
                            />
                            <div
                                className="row-reception__delete"
                                onClick={
                                    () => (
                                        setCount(count - 1),
                                        index === 2
                                            ? setValue({ first: value.first, second: value.second, third: '' })
                                            : index === 1 ? setValue({ first: value.first, second: '', third: '' })
                                                : null
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
                })
                : null
            }
            <div className="row-reception__add">
                {field.label !== 'Данные обследований'
                    ? <div className="row-reception__add-more" onClick={() => setCount(count + 1)}>
                        <img src={plus} alt="plus" />
                        <p>добавить новое поле</p>
                    </div>
                    : null
                }
                <div className={Object.keys(field).length !== 2 ? "field-more__rows" : null} >
                    {Object.keys(field).length !== 2
                        ? <>
                            {field.addMore.map((label, index) => {
                                let visible
                                let value
                                let setVisible = function () { }
                                let nextVisible = function () { }
                                let setValue = function () { }
                                switch (label.label) {
                                    case 'Аллергологический анамнез': {
                                        visible = allergyVisible
                                        // setVisible = setAlergyVisible
                                        nextVisible = setPharmacologyVisible
                                        setValue = setAlergy
                                        value = allergy
                                        break
                                    }
                                    case 'Фармакологический анамнез': {
                                        visible = pharmacologyVisible
                                        setVisible = setPharmacologyVisible
                                        nextVisible = setOperationsVisible
                                        setValue = setPharmacology
                                        value = pharmacology
                                        break
                                    }
                                    case 'Операции на глаза': {
                                        visible = operationsVisible
                                        setVisible = setOperationsVisible
                                        setValue = setOperations
                                        value = operations
                                        break
                                    }
                                    case 'Придаточный аппарат глаза': {
                                        visible = adnexaVisible
                                        nextVisible = setCorneaVisible
                                        // setVisible =
                                        setValue = setAdnexa
                                        value = adnexa
                                        break
                                    }
                                    case 'Роговица': {
                                        visible = corneaVisible
                                        setVisible = setCorneaVisible
                                        nextVisible = setFrontVisible
                                        setValue = setCornea
                                        value = cornea
                                        break
                                    }
                                    case 'Передняя камера': {
                                        visible = frontVisible
                                        setVisible = setFrontVisible
                                        nextVisible = setIrisVisible
                                        setValue = setFront
                                        value = front
                                        break
                                    }
                                    case 'Радужка': {
                                        visible = irisVisible
                                        setVisible = setIrisVisible
                                        nextVisible = setLensVisible
                                        setValue = setIris
                                        value = iris
                                        break
                                    }
                                    case 'Хрусталик': {
                                        visible = lensVisible
                                        setVisible = setLensVisible
                                        nextVisible = setVitreousVisible
                                        setValue = setLens
                                        value = lens
                                        break
                                    }
                                    case 'Стекловидное тело': {
                                        visible = vitreousVisible
                                        setVisible = setVitreousVisible
                                        nextVisible = setDznVisible
                                        setValue = setVitreous
                                        value = vitreous
                                        break
                                    }
                                    case 'ДЗН': {
                                        visible = dznVisible
                                        setVisible = setDznVisible
                                        nextVisible = setPosteriorVisible
                                        setValue = setDzn
                                        value = dzn
                                        break
                                    }
                                    case 'Задний отрезок глаза': {
                                        visible = posteriorVisible
                                        setVisible = setPosteriorVisible
                                        // nextVisible =
                                        setValue = setPosterior
                                        value = posterior
                                        break
                                    }
                                    case 'Основной диагноз': {
                                        visible = mainDiagnosisVisible
                                        setVisible = setMainDiagnosisVisible
                                        nextVisible = setConcomitantProfileDiagnosisVisible
                                        setValue = setMainDiagnosis
                                        value = mainDiagnosis
                                        break
                                    }
                                    case 'Сопутствующий профильный диагноз': {
                                        visible = concomitantProfileDiagnosisVisible
                                        setVisible = setConcomitantProfileDiagnosisVisible
                                        nextVisible = setAssociatedMedicalDiagnosisVisible
                                        setValue = setConcomitantProfileDiagnosis
                                        value = concomitantProfileDiagnosis
                                        break
                                    }
                                    case 'Сопутствующий соматический диагноз': {
                                        visible = associatedMedicalDiagnosisVisible
                                        setVisible = setAssociatedMedicalDiagnosisVisible
                                        nextVisible = setVisometryIOPVisible
                                        setValue = setAssociatedMedicalDiagnosis
                                        value = associatedMedicalDiagnosis
                                        break
                                    }
                                    case 'Визометрия + ВГД': {
                                        visible = visometryIOPVisible
                                        setVisible = setVisometryIOPVisible
                                        nextVisible = setVisometryInCycloplegiaVisible
                                        setValue = setVisometryIOP
                                        value = visometryIOP
                                        break
                                    }
                                    case 'Визометрия при циклоплегии': {
                                        visible = visometryInCycloplegiaVisible
                                        setVisible = setVisometryInCycloplegiaVisible
                                        // nextVisible =
                                        setValue = setVisometryInCycloplegia
                                        value = visometryInCycloplegia
                                        break
                                    }
                                    case 'Пахиметрическая карта': {
                                        visible = pachymetricMapVisible
                                        setVisible = setPachymetricMapVisible
                                        // nextVisible =
                                        setValue = setPachymetricMap
                                        value = pachymetricMap
                                        break
                                    }
                                    case 'Авторефрактометрия': {
                                        visible = autorefractometryVisible
                                        setVisible = setAutorefractometryVisible
                                        // nextVisible =
                                        setValue = setAutorefractometry
                                        value = autorefractometry
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
                                        setValue={setValue}
                                        value={value}
                                        index={index}
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
