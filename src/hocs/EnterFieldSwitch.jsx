import React from 'react'

import EnterField from '../Components/Pages/Reception/EnterField/EnterField'

const EnterFieldSwitch = ({ field, objToInputSwitch }) => {

    let visible
    let value
    let setVisible = function () { }
    let nextVisible = function () { }
    let setValue = function () { }

    switch (field.label) {
        case 'Жалобы пациента': {
            visible = objToInputSwitch.complaintsVisible
            // setVisible = setComplaintsVisible
            nextVisible = objToInputSwitch.setHistoryVisible
            value = objToInputSwitch.complaints
            setValue = objToInputSwitch.setComplaints
            break
        }
        case 'Анамнез пациента': {
            visible = objToInputSwitch.historyVisible
            setVisible = objToInputSwitch.setHistoryVisible
            nextVisible = objToInputSwitch.setStatusVisible
            value = objToInputSwitch.history
            setValue = objToInputSwitch.setHistory
            break
        }
        case 'Status ophtalmicus': {
            visible = objToInputSwitch.statusVisible
            setVisible = objToInputSwitch.setStatusVisible
            nextVisible = objToInputSwitch.setDiagnosisVisible
            value = objToInputSwitch.status
            setValue = objToInputSwitch.setStatus
            break
        }
        case 'Диагноз': {
            visible = objToInputSwitch.diagnosisVisible
            setVisible = objToInputSwitch.setDiagnosisVisible
            nextVisible = objToInputSwitch.setSurveyVisible
            value = objToInputSwitch.diagnosis
            setValue = objToInputSwitch.setDiagnosis
            break
        }
        case 'Данные обследований': {
            visible = objToInputSwitch.surveyVisible
            setVisible = objToInputSwitch.setSurveyVisible
            // nextVisible =
            value = objToInputSwitch.survey
            setValue = objToInputSwitch.setSurvey
            break
        }
        default: {}
    }

    return <EnterField
        field={field}
        visible={visible}
        setVisible={setVisible}
        nextVisible={nextVisible}
        setValue={setValue}
        value={value}
        getHistoryData={objToInputSwitch.getHistoryData}
        getStatusData={objToInputSwitch.getStatusData}
        getDiagnosisData={objToInputSwitch.getDiagnosisData}
    />

}

export default EnterFieldSwitch
