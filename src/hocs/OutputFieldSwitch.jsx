import React from 'react'
import OutputField from '../Components/Pages/Reception/OutputField/OutputField'

const OutputFieldSwitch = ({ field, index, objToOutputSwitch }) => {

    let firstInputText
    let secondInputText
    let thirdInputText

    switch (field.label) {
        case 'Жалобы пациента': {
            firstInputText = objToOutputSwitch?.complaints?.first
            secondInputText = objToOutputSwitch?.complaints?.second
            thirdInputText = objToOutputSwitch?.complaints?.third
            break
        }
        case 'Анамнез пациента': {
            firstInputText = objToOutputSwitch?.history?.first
            secondInputText = objToOutputSwitch?.history?.second
            thirdInputText = objToOutputSwitch?.history?.third
            break
        }
        case 'Status ophtalmicus': {
            firstInputText = objToOutputSwitch?.status?.first
            secondInputText = objToOutputSwitch?.status?.second
            thirdInputText = objToOutputSwitch?.status?.third
            break
        }
        case 'Диагноз': {
            firstInputText = objToOutputSwitch?.diagnosis?.first
            secondInputText = objToOutputSwitch?.diagnosis?.second
            thirdInputText = objToOutputSwitch?.diagnosis?.third
            break
        }
    }

    return <OutputField
        field={field}
        firstInputText={firstInputText}
        secondInputText={secondInputText}
        thirdInputText={thirdInputText}
        index={index}
        historyData={objToOutputSwitch?.historyData}
        statusData={objToOutputSwitch?.statusData}
        diagnosisData={objToOutputSwitch?.diagnosisData}
    />

}

export default OutputFieldSwitch
