import React from 'react'

import plus from '../../../../assets/img/plus.svg'
import del from '../../../../assets/img/del.svg'

import EyeInput from './EyeInput/EyeInput'
import AddMoreSwitch from '../../../../hocs/AddMoreSwitch'

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
    const [posteriorVisible, setPosteriorVisible] = React.useState(true) // 8
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

    const visibleObj = {
        allergyVisible, adnexaVisible, corneaVisible, frontVisible, irisVisible,
        lensVisible, vitreousVisible, dznVisible, posteriorVisible, mainDiagnosisVisible,
        concomitantProfileDiagnosisVisible, associatedMedicalDiagnosisVisible,
        visometryIOPVisible, visometryInCycloplegiaVisible, pachymetricMapVisible,
        autorefractometryVisible, pharmacologyVisible, operationsVisible
    }
    const setVisibleObj = {
        setPharmacologyVisible, setCorneaVisible, setFrontVisible, setIrisVisible,
        setLensVisible, setVitreousVisible, setDznVisible, setPosteriorVisible,
        setMainDiagnosisVisible, setConcomitantProfileDiagnosisVisible,
        setAssociatedMedicalDiagnosisVisible, setVisometryIOPVisible, setVisometryInCycloplegiaVisible,
        setPachymetricMapVisible, setAutorefractometryVisible,
    }
    const valueObj = {
        allergy, pharmacology, operations, adnexa, cornea, front, iris, lens,
        vitreous, dzn, posterior, mainDiagnosis, concomitantProfileDiagnosis,
        associatedMedicalDiagnosis, visometryIOP, visometryInCycloplegia, pachymetricMap, autorefractometry,
    }
    const setValueObj = {
        setAlergy, setPharmacology, setOperations, setAdnexa, setCornea, setFront, setIris, setLens,
        setVitreous, setDzn, setPosterior, setMainDiagnosis, setConcomitantProfileDiagnosis,
        setAssociatedMedicalDiagnosis, setVisometryIOP, setVisometryInCycloplegia, setPachymetricMap, setAutorefractometry,
    }
    const nextVisibleObj = {
        setPharmacologyVisible, setOperationsVisible, setCorneaVisible, setFrontVisible, setIrisVisible,
        setLensVisible, setVitreousVisible, setDznVisible, setPosteriorVisible, setConcomitantProfileDiagnosisVisible,
        setAssociatedMedicalDiagnosisVisible, setVisometryIOPVisible, setVisometryInCycloplegiaVisible,
    }

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
                                return <AddMoreSwitch
                                    key={`${label}_${index}`}
                                    label={label}
                                    title={field.label}
                                    index={index}
                                    visibleObj={visibleObj}
                                    setVisibleObj={setVisibleObj}
                                    valueObj={valueObj}
                                    setValueObj={setValueObj}
                                    nextVisibleObj={nextVisibleObj}
                                />
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
